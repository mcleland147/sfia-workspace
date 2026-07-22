import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IntakeView } from "@/features/d1/intake/IntakeView";
import { NewProjectForm } from "@/features/d1/NewProjectForm";
import { WorkspaceHomeView } from "@/features/d1/WorkspaceHomeView";
import type { D1Project } from "@/lib/d1/types";
import { D1_GOVERNANCE_METHOD_MODE } from "@/lib/d1/types";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), refresh: vi.fn() }),
}));

vi.mock("@/lib/d1/actions", () => ({
  actionCreateProject: vi.fn(async () => ({
    ok: true,
    project: {
      projectId: "proj-test",
      name: "X",
      state: "ACTIVE",
      methodMode: D1_GOVERNANCE_METHOD_MODE,
    },
    idempotent: false,
  })),
}));

vi.mock("@/lib/d1/intake/actions", () => ({
  actionAnalyzeIntent: vi.fn(async (input: { rawIntent: string }) => {
    const intent = input.rawIntent.toLowerCase();
    if (intent.includes("__force_provider_error__")) {
      return { ok: false, code: "PROVIDER", message: "Échec fournisseur" };
    }
    if (intent.includes("ne crée rien") || intent.includes("analyse")) {
      return {
        ok: true,
        providerMode: "fake",
        providerId: "d1-intake-fake",
        durationMs: 1,
        clarificationTurnCount: 0,
        proposal: {
          schemaVersion: "0.1.0-d1-c2",
          proposalId: "rrp-a",
          rawIntent: input.rawIntent,
          normalizedIntent: "Analyse seule",
          subject: "Idée",
          proposedObjective: "Synthèse",
          proposedOutcomeType: "ANALYZE_ONLY",
          proposedCycleType: null,
          proposedProfile: null,
          proposedBlocks: [],
          constraints: [],
          assumptions: [],
          missingInformation: [],
          clarificationQuestion: null,
          alternatives: [],
          confidence: 0.8,
          rationale: "Analyse demandée",
          requiresHumanConfirmation: false,
          status: "ANALYSIS_ONLY",
          createdAt: new Date().toISOString(),
          proposedProjectId: null,
          proposedCycleId: null,
        },
      };
    }
    if (intent.includes("nouveau sujet")) {
      return {
        ok: true,
        providerMode: "fake",
        providerId: "d1-intake-fake",
        durationMs: 1,
        clarificationTurnCount: 0,
        proposal: {
          schemaVersion: "0.1.0-d1-c2",
          proposalId: "rrp-c",
          rawIntent: input.rawIntent,
          normalizedIntent: "Vague",
          subject: "Sujet",
          proposedObjective: "À clarifier",
          proposedOutcomeType: "NEED_CLARIFICATION",
          proposedCycleType: null,
          proposedProfile: null,
          proposedBlocks: [],
          constraints: [],
          assumptions: [],
          missingInformation: ["objectif"],
          clarificationQuestion:
            "Quel résultat concret souhaitez-vous obtenir avec ce sujet ?",
          alternatives: [],
          confidence: 0.3,
          rationale: "Trop vague",
          requiresHumanConfirmation: true,
          status: "CLARIFICATION_REQUIRED",
          createdAt: new Date().toISOString(),
          proposedProjectId: null,
          proposedCycleId: null,
        },
      };
    }
    return {
      ok: true,
      providerMode: "fake",
      providerId: "d1-intake-fake",
      durationMs: 1,
      clarificationTurnCount: 0,
      proposal: {
        schemaVersion: "0.1.0-d1-c2",
        proposalId: "rrp-p",
        rawIntent: input.rawIntent,
        normalizedIntent: "Créer projet",
        subject: "Contrats",
        proposedObjective: "Suivi des contrats",
        proposedOutcomeType: "CREATE_PROJECT_CANDIDATE",
        proposedCycleType: "FRAMING",
        proposedProfile: "Standard",
        proposedBlocks: ["cadrage"],
        constraints: [],
        assumptions: ["Pas de match"],
        missingInformation: ["confirmation"],
        clarificationQuestion: null,
        alternatives: [],
        confidence: 0.75,
        rationale: "Nouveau besoin",
        requiresHumanConfirmation: true,
        status: "PROPOSAL_READY",
        createdAt: new Date().toISOString(),
        proposedProjectId: null,
        proposedCycleId: null,
      },
    };
  }),
  actionCancelIntakeSession: vi.fn(async () => ({ ok: true })),
  actionLogClarificationAnswer: vi.fn(async () => ({ ok: true })),
}));

const sample: D1Project = {
  projectId: "proj-demo",
  workspaceId: "ws-studio-default",
  name: "Campus360",
  objective: "Cadrage comptes",
  initialContextSummary: null,
  methodMode: "V3_CANDIDATE",
  state: "ACTIVE",
  ownerActorId: "actor-mono-i1",
  createdAt: "2026-07-22T10:00:00.000Z",
  updatedAt: "2026-07-22T10:00:00.000Z",
  version: 1,
};

describe("D1-C2 IntakeView", () => {
  beforeEach(() => {
    vi.spyOn(console, "info").mockImplementation(() => {});
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("keeps only describe + create manually actions", () => {
    render(<IntakeView projects={[sample]} />);
    expect(screen.getByTestId("quick-describe")).toBeTruthy();
    expect(screen.getByTestId("quick-manual").textContent).toBe(
      "Créer manuellement",
    );
    expect(screen.queryByTestId("quick-resume")).toBeNull();
    expect(screen.queryByTestId("quick-decisions")).toBeNull();
  });

  it("shows structured proposal without executable confirm", async () => {
    const user = userEvent.setup();
    render(<IntakeView projects={[]} />);
    await user.type(
      screen.getByTestId("intake-intent"),
      "Je veux lancer une application de suivi des contrats.",
    );
    await user.click(screen.getByTestId("intake-submit"));
    await waitFor(() => expect(screen.getByTestId("intake-proposal")).toBeTruthy());
    expect(screen.getByTestId("intake-no-mutation")).toBeTruthy();
    expect(screen.getByTestId("intake-no-confirm-exec")).toBeTruthy();
    expect(screen.queryByText(/Confirmer et créer/i)).toBeNull();
    expect(screen.queryByTestId("project-method-mode")).toBeNull();
  });

  it("handles clarification flow", async () => {
    const user = userEvent.setup();
    render(<IntakeView projects={[]} />);
    await user.type(screen.getByTestId("intake-intent"), "J’ai un nouveau sujet.");
    await user.click(screen.getByTestId("intake-submit"));
    await waitFor(() =>
      expect(screen.getByTestId("intake-clarification")).toBeTruthy(),
    );
  });

  it("handles analyze-only", async () => {
    const user = userEvent.setup();
    render(<IntakeView projects={[]} />);
    await user.type(
      screen.getByTestId("intake-intent"),
      "Analyse cette idée, mais ne crée rien.",
    );
    await user.click(screen.getByTestId("intake-submit"));
    await waitFor(() => expect(screen.getByTestId("intake-proposal")).toBeTruthy());
    expect(screen.getByTestId("proposal-outcome").textContent).toMatch(
      /Analyse seule/,
    );
  });
});

describe("D1-C1 IA cleanup still holds", () => {
  afterEach(() => cleanup());

  it("Workspace hosts Reprendre", () => {
    render(<WorkspaceHomeView projects={[sample]} />);
    expect(
      screen.getByRole("heading", { name: "Reprendre un travail", level: 2 }),
    ).toBeTruthy();
  });

  it("Créer manuellement has no MethodMode select", () => {
    render(<NewProjectForm />);
    expect(
      screen.getByRole("heading", { name: "Créer manuellement", level: 1 }),
    ).toBeTruthy();
    expect(screen.queryByTestId("project-method-mode")).toBeNull();
  });
});
