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

const {
  listProjectsRuntimeActionMock,
  createProjectRuntimeActionMock,
  newProjectOnboardingTurnActionMock,
  pushMock,
} = vi.hoisted(() => ({
  listProjectsRuntimeActionMock: vi.fn(),
  createProjectRuntimeActionMock: vi.fn(),
  newProjectOnboardingTurnActionMock: vi.fn(),
  pushMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  listProjectsRuntimeAction: listProjectsRuntimeActionMock,
  createProjectRuntimeAction: createProjectRuntimeActionMock,
}));

vi.mock("@/features/pre-m6-product-ui/newProjectOnboardingAction", () => ({
  newProjectOnboardingTurnAction: newProjectOnboardingTurnActionMock,
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
  newProjectOnboardingTurnActionMock.mockReset();
  pushMock.mockReset();
});

describe("P5-S06 CP01 / P6-HQA-NEWPROJECT-01 draft helpers", () => {
  it("absorbUserTurn stamps provisional name without blocking create after a turn", () => {
    const d0 = emptyDraft();
    expect(collectPhaseOf(d0)).toBe("INTENTION_REQUIRED");
    const d1 = absorbUserTurn(d0, "Moderniser le reporting");
    expect(d1.intention).toContain("Moderniser");
    expect(d1.name.length).toBeGreaterThan(0);
    expect(d1.nameProvisional).toBe(true);
    expect(isMinimumSufficient(d1)).toBe(true);
  });

  it("reopens name explicitly", () => {
    const d = absorbUserTurn(emptyDraft(), "Suivre les contrats");
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
    // P3 section label « À reprendre »; content remains updatedAt-only (no invented next action).
    expect(screen.getByTestId("studio-projects-recent")).toHaveTextContent(
      "À reprendre",
    );
    expect(screen.getByTestId("studio-projects-recent")).toHaveTextContent(
      "aucune prochaine action inventée",
    );
    expect(
      within(screen.getByTestId("studio-projects-recent")).queryByText(
        /Finaliser|Reprendre la trajectoire/i,
      ),
    ).toBeNull();
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

describe("P5-S06 CP01 NewProjectIntentionPage (cognitive onboarding)", () => {
  beforeEach(() => {
    vi.spyOn(globalThis.crypto, "randomUUID").mockReturnValue(
      "00000000-0000-4000-8000-000000000099",
    );
    newProjectOnboardingTurnActionMock.mockImplementation(
      async (input: {
        userText: string;
        draft: {
          intention: string;
          name: string;
          nameProvisional: boolean;
          objective: string;
          context: string;
          firstOrientation: string;
          unknowns: string[];
          cognitiveCreateProposal: boolean;
          explicitRefuseCreate: boolean;
          intentionKind: string;
          cognitiveTurns: number;
        };
      }) => {
        const intention = input.userText;
        const name =
          intention.length > 48 ? `${intention.slice(0, 45)}…` : intention;
        const draft = {
          ...input.draft,
          intention,
          objective: intention,
          name: name.charAt(0).toUpperCase() + name.slice(1),
          nameProvisional: true,
          cognitiveCreateProposal: true,
          explicitRefuseCreate: false,
          intentionKind: "project_direction" as const,
          cognitiveTurns: input.draft.cognitiveTurns + 1,
          firstOrientation:
            "Qualifier la première intention de travail une fois le projet créé",
          unknowns: [],
        };
        return {
          ok: true as const,
          draft,
          replyText: `Si je comprends bien : ${intention}. Je propose « ${draft.name} » (provisoire).`,
          clarification: {
            title: "UNE PRÉCISION UTILE",
            question: "Quel résultat concret te fera dire que c’est réussi ?",
            suggestions: ["Plus simple à comprendre"],
          },
          payload: {
            replyText: `ok`,
            intentionKnown: intention,
            objectiveProposal: intention,
            contextKnown: null,
            nameProposal: draft.name,
            nameProvisional: true,
            firstOrientationProposal: draft.firstOrientation,
            unknowns: [],
            sufficientForCreateProposal: true,
            refuseCreateDetected: false,
            acceptCreateDetected: false,
            intentionKind: "project_direction" as const,
            clarificationQuestion: "Quel résultat ?",
            suggestions: [],
          },
          boundarySubstitution: true,
          usageObservation: {
            inputTokens: null,
            outputTokens: null,
            totalTokens: null,
            model: "fake-test-model",
            providerResponseId: null,
            selectedModel: null,
            selectedReasoningEffort: null,
            boundarySubstitution: true,
            declaredHumanQaBudgetEur: 10 as const,
            hardCapEnforced: false as const,
          },
        };
      },
    );
  });

  it("does not create a Project before explicit CTA; one cognitive turn can enable create", async () => {
    const user = userEvent.setup();
    render(<NewProjectIntentionPage />);
    expect(screen.getByTestId("create-project-submit")).toBeDisabled();
    expect(screen.getByTestId("new-project-thread")).toHaveTextContent(
      /accomplir|projet/i,
    );
    expect(screen.getByTestId("new-project-starters")).toBeInTheDocument();

    await user.type(
      screen.getByTestId("new-project-input"),
      "Suivre les contrats fournisseurs",
    );
    await user.click(screen.getByTestId("new-project-send"));
    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
    await waitFor(() =>
      expect(screen.getByTestId("preview-intention")).toHaveTextContent(
        /contrats/i,
      ),
    );
    expect(screen.getByTestId("create-project-submit")).toBeEnabled();
    expect(screen.getByTestId("preview-name")).not.toHaveTextContent(
      /pas encore précisé/i,
    );
    expect(screen.getByTestId("new-project-clarification")).toBeInTheDocument();
    expect(screen.getByTestId("new-project-understood")).toBeInTheDocument();
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
    await waitFor(() =>
      expect(screen.getByTestId("create-project-submit")).toBeEnabled(),
    );
    await user.click(screen.getByTestId("create-project-submit"));

    await waitFor(() =>
      expect(createProjectRuntimeActionMock).toHaveBeenCalledTimes(1),
    );
    const arg = createProjectRuntimeActionMock.mock.calls[0]![0];
    expect(arg.name.length).toBeGreaterThan(0);
    expect(arg.objective).toMatch(/contrats/i);
    expect(arg.context).toMatch(/nora-onboarding-handoff/);
    expect(arg.criticality).toBe("STANDARD");
    expect(arg).not.toHaveProperty("cycleId");
    expect(arg).not.toHaveProperty("humanDecision");
    expect(pushMock).toHaveBeenCalledWith(
      "/studio/projects/prj%3As06-1?from=new-project-onboarding",
    );
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
        busy: true,
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
