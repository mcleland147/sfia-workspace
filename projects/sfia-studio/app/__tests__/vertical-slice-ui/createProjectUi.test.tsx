import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axe from "axe-core";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { StudioShell } from "@/components/shell/StudioShell";
import { CreateProjectForm } from "@/features/vertical-slice-ui/CreateProjectForm";
import { RuntimeDisclosureBanner } from "@/features/vertical-slice-ui/RuntimeDisclosureBanner";

const { createProjectRuntimeActionMock } = vi.hoisted(() => ({
  createProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  createProjectRuntimeAction: createProjectRuntimeActionMock,
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
  projectId: "prj:v2-a2-1",
  project: {
    projectId: "prj:v2-a2-1",
    name: "Projet V2-A2",
    shortReference: "V2-A2",
    objective: "Créer une interface réelle.",
    contextSummary: "Contexte local borné.",
    criticality: "HIGH" as const,
    constraints: ["Sans IAM", "Sans persistance produit"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "sha256:test-digest",
    status: "resolved",
  },
  livingState: {
    id: "lps:v2-a2-1",
    version: 1 as const,
    createdAt: "2026-07-29T21:00:00.000Z",
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
    messages: ["Temporary local data"],
  },
  reusedFromIdempotencyKey: false,
  auditStatus: "DISABLED" as const,
};

let uuidCounter = 0;

beforeEach(() => {
  uuidCounter = 0;
  vi.spyOn(globalThis.crypto, "randomUUID").mockImplementation(() => {
    uuidCounter += 1;
    return `00000000-0000-4000-8000-${String(uuidCounter).padStart(12, "0")}`;
  });
  createProjectRuntimeActionMock.mockReset();
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

async function fillRequiredFields(
  user: ReturnType<typeof userEvent.setup>,
) {
  await user.type(screen.getByLabelText(/Nom du projet/), "Projet V2-A2");
  await user.type(
    screen.getByLabelText(/Objectif/),
    "Créer une interface réelle.",
  );
  await user.type(
    screen.getByLabelText(/Contexte/),
    "Contexte local borné.",
  );
}

describe("V2-A2 Create Project UI", () => {
  it("renders all fields, qualification warning, and runtime disclosures", async () => {
    render(
      <>
        <RuntimeDisclosureBanner />
        <CreateProjectForm />
      </>,
    );

    expect(screen.getByLabelText(/Nom du projet/)).toBeRequired();
    expect(screen.getByLabelText(/Objectif/)).toBeRequired();
    expect(screen.getByLabelText(/Contexte/)).toBeRequired();
    expect(screen.getByLabelText("Contraintes principales")).toBeVisible();
    expect(screen.getByLabelText("Référence courte")).toBeVisible();
    expect(screen.getByLabelText("Faible")).toBeVisible();
    expect(screen.getByLabelText("Standard")).toBeChecked();
    expect(screen.getByLabelText("Élevée")).toBeVisible();
    expect(
      screen.getByText(/entrée de qualification uniquement/i),
    ).toBeVisible();
    expect(screen.getAllByText("LOCAL_PROCESS").length).toBeGreaterThan(0);
    expect(screen.getAllByText("NOT_GUARANTEED").length).toBeGreaterThan(0);
    expect(screen.getAllByText(/AGENT DISABLED/).length).toBeGreaterThan(0);
    expect(screen.queryByLabelText(/email|organisation|token/i)).toBeNull();
    await waitFor(() =>
      expect(screen.getByTestId("idempotency-key")).not.toHaveTextContent(
        "Génération",
      ),
    );
  });

  it("blocks submission and links required errors to fields", async () => {
    const user = userEvent.setup();
    render(<CreateProjectForm />);

    await user.click(screen.getByTestId("create-project-submit"));

    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
    expect(screen.getByLabelText(/Nom du projet/)).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    expect(screen.getByLabelText(/Nom du projet/)).toHaveAccessibleDescription(
      "Le nom du projet est obligatoire.",
    );
    expect(screen.getByLabelText(/Nom du projet/)).toHaveFocus();
    expect(screen.getByText("L’objectif est obligatoire.")).toBeVisible();
    expect(screen.getByText("Le contexte est obligatoire.")).toBeVisible();
  });

  it("validates name, short reference, and per-line constraint lengths", async () => {
    const user = userEvent.setup();
    render(<CreateProjectForm />);

    fireEvent.change(screen.getByLabelText(/Nom du projet/), {
      target: { value: "n".repeat(201) },
    });
    await user.type(screen.getByLabelText(/Objectif/), "Objectif");
    await user.type(screen.getByLabelText(/Contexte/), "Contexte");
    fireEvent.change(screen.getByLabelText("Référence courte"), {
      target: { value: "r".repeat(65) },
    });
    await user.type(
      screen.getByLabelText("Contraintes principales"),
      "c".repeat(501),
    );
    await user.click(screen.getByTestId("create-project-submit"));

    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
    expect(screen.getByText(/nom ne peut pas dépasser 200/)).toBeVisible();
    expect(
      screen.getByText(/référence courte ne peut pas dépasser 64/),
    ).toBeVisible();
    expect(
      screen.getByText(
        /chaque contrainte doit contenir au maximum 500/i,
      ),
    ).toBeVisible();
  });

  it("calls only the runtime action with the exact DTO and parsed constraints", async () => {
    createProjectRuntimeActionMock.mockResolvedValue(SUCCESS_RESULT);
    const user = userEvent.setup();
    render(<CreateProjectForm />);
    await fillRequiredFields(user);
    await user.click(screen.getByLabelText("Élevée"));
    await user.type(screen.getByLabelText("Référence courte"), "V2-A2");
    await user.type(
      screen.getByLabelText("Contraintes principales"),
      "  Sans IAM  \n\nSans persistance produit  ",
    );
    const key = screen.getByTestId("idempotency-key").textContent;

    await user.click(screen.getByTestId("create-project-submit"));

    await waitFor(() =>
      expect(createProjectRuntimeActionMock).toHaveBeenCalledWith({
        name: "Projet V2-A2",
        objective: "Créer une interface réelle.",
        context: "Contexte local borné.",
        criticality: "HIGH",
        constraints: ["Sans IAM", "Sans persistance produit"],
        shortReference: "V2-A2",
        idempotencyKey: key,
      }),
    );
  });

  it("keeps the idempotency key stable across a retry", async () => {
    createProjectRuntimeActionMock
      .mockResolvedValueOnce({
        ok: false,
        error: {
          code: "PROJECT_CREATION_FAILED",
          message: "Temporary failure",
          retryable: true,
        },
        disclosures: SUCCESS_RESULT.disclosures,
        auditStatus: "DISABLED",
      })
      .mockResolvedValueOnce(SUCCESS_RESULT);
    const user = userEvent.setup();
    render(<CreateProjectForm />);
    await fillRequiredFields(user);

    await user.click(screen.getByTestId("create-project-submit"));
    await screen.findByTestId("submit-error");
    await user.click(screen.getByTestId("create-project-submit"));

    await waitFor(() =>
      expect(createProjectRuntimeActionMock).toHaveBeenCalledTimes(2),
    );
    expect(
      createProjectRuntimeActionMock.mock.calls[0][0].idempotencyKey,
    ).toBe(createProjectRuntimeActionMock.mock.calls[1][0].idempotencyKey);
  });

  it("disables submit and announces pending state", async () => {
    let resolveAction: (value: typeof SUCCESS_RESULT) => void = () => {};
    createProjectRuntimeActionMock.mockReturnValue(
      new Promise((resolve) => {
        resolveAction = resolve;
      }),
    );
    const user = userEvent.setup();
    render(<CreateProjectForm />);
    await fillRequiredFields(user);

    await user.click(screen.getByTestId("create-project-submit"));

    expect(screen.getByTestId("create-project-form")).toHaveAttribute(
      "aria-busy",
      "true",
    );
    expect(screen.getByTestId("create-project-submit")).toBeDisabled();
    expect(screen.getByRole("status")).toHaveTextContent(
      "Création locale en cours",
    );
    resolveAction(SUCCESS_RESULT);
    await screen.findByRole("heading", { name: "Projet créé localement" });
  });

  it("maps runtime INPUT_INVALID to its UI field", async () => {
    createProjectRuntimeActionMock.mockResolvedValue({
      ok: false,
      error: {
        code: "INPUT_INVALID",
        message: "Criticality is invalid.",
        retryable: false,
        field: "perceivedCriticality",
      },
      disclosures: SUCCESS_RESULT.disclosures,
      auditStatus: "DISABLED",
    });
    const user = userEvent.setup();
    render(<CreateProjectForm />);
    await fillRequiredFields(user);

    await user.click(screen.getByTestId("create-project-submit"));

    expect(await screen.findByText("Criticality is invalid.")).toBeVisible();
  });

  it("shows DOCTRINE_UNRESOLVED as a blocking non-technical error", async () => {
    createProjectRuntimeActionMock.mockResolvedValue({
      ok: false,
      error: {
        code: "DOCTRINE_UNRESOLVED",
        message: "/private/local/registry missing",
        retryable: false,
      },
      disclosures: SUCCESS_RESULT.disclosures,
      auditStatus: "DISABLED",
    });
    const user = userEvent.setup();
    render(<CreateProjectForm />);
    await fillRequiredFields(user);

    await user.click(screen.getByTestId("create-project-submit"));

    const error = await screen.findByTestId("submit-error");
    expect(error).toHaveTextContent(/doctrine locale n’a pas pu être validée/i);
    expect(error).not.toHaveTextContent("/private/local");
  });

  it("renders the real success projection inline and renews the key on reset", async () => {
    createProjectRuntimeActionMock.mockResolvedValue(SUCCESS_RESULT);
    const user = userEvent.setup();
    render(<CreateProjectForm />);
    await fillRequiredFields(user);
    const firstKey = screen.getByTestId("idempotency-key").textContent;

    await user.click(screen.getByTestId("create-project-submit"));

    expect(
      await screen.findByRole("heading", { name: "Projet créé localement" }),
    ).toBeVisible();
    expect(screen.getByText("prj:v2-a2-1")).toBeVisible();
    expect(screen.getAllByText("REAL_LOCAL_CORE").length).toBeGreaterThan(0);
    expect(screen.getAllByText("false").length).toBeGreaterThan(0);
    expect(screen.getByText("pkg:studio-v3-oa")).toBeVisible();
    expect(screen.getByText("lps:v2-a2-1")).toBeVisible();
    expect(screen.getAllByText("NOT_READY").length).toBeGreaterThan(0);
    expect(screen.getAllByText("NOT_GUARANTEED").length).toBeGreaterThan(0);
    expect(screen.queryByRole("link", { name: /projet/i })).toBeNull();
    expect(screen.queryByText(/recommendation|dashboard/i)).toBeNull();

    await user.click(
      screen.getByRole("button", { name: "Créer un autre projet" }),
    );
    await waitFor(() =>
      expect(screen.getByTestId("idempotency-key").textContent).not.toBe(
        firstKey,
      ),
    );
    expect(screen.getByLabelText(/Nom du projet/)).toHaveValue("");
  });

  it("renders identical constraints twice without duplicate React key warnings", async () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined);
    createProjectRuntimeActionMock.mockResolvedValue({
      ...SUCCESS_RESULT,
      project: {
        ...SUCCESS_RESULT.project,
        constraints: ["Sans IAM", "Sans IAM"],
      },
    });
    const user = userEvent.setup();
    render(<CreateProjectForm />);
    await fillRequiredFields(user);

    await user.click(screen.getByTestId("create-project-submit"));

    const constraints = await screen.findByLabelText("Contraintes");
    expect(within(constraints).getAllByText("Sans IAM")).toHaveLength(2);
    expect(
      consoleError.mock.calls.some((args) =>
        args.some(
          (arg) =>
            typeof arg === "string" &&
            /Encountered two children with the same key/i.test(arg),
        ),
      ),
    ).toBe(false);
    consoleError.mockRestore();
  });

  it("keeps StudioShell defaults and allows V2-A2 to hide tabs and primary CTA", () => {
    const copilot = {
      variant: "flush" as const,
      name: "Nora",
      subtitle: "Lecture seule",
      summary: "Aucune autorité",
    };
    const { rerender } = render(
      <StudioShell
        variant="flush"
        activeRoute="/synthese"
        title="Historique"
        copilot={copilot}
      >
        contenu
      </StudioShell>,
    );
    expect(
      within(screen.getByTestId("topbar")).getByRole("link", {
        name: "Nouvelle demande",
      }),
    ).toBeVisible();
    expect(
      screen.getByRole("navigation", { name: "Navigation cycle" }),
    ).toBeVisible();

    rerender(
      <StudioShell
        variant="flush"
        activeRoute="/studio/projects/new"
        title="Créer un projet"
        showTabs={false}
        primaryAction={null}
        copilot={copilot}
      >
        contenu
      </StudioShell>,
    );
    expect(
      within(screen.getByTestId("topbar")).queryByRole("link", {
        name: "Nouvelle demande",
      }),
    ).toBeNull();
    expect(
      screen.queryByRole("navigation", { name: "Navigation cycle" }),
    ).toBeNull();
    expect(
      screen.getByLabelText("Créer un projet Studio"),
    ).toHaveAttribute("href", "/studio/projects/new");
  });

  it("has no serious or critical automated accessibility violations", async () => {
    const { container } = render(
      <main>
        <RuntimeDisclosureBanner />
        <CreateProjectForm />
      </main>,
    );

    const results = await axe.run(container, {
      rules: {
        // jsdom has no canvas implementation; runtime screenshots are used
        // for the complementary visual contrast review.
        "color-contrast": { enabled: false },
      },
    });
    expect(
      results.violations.filter(
        (violation) =>
          violation.impact === "critical" || violation.impact === "serious",
      ),
    ).toEqual([]);
  });
});
