/**
 * Workspace → OPS1 navigation continuity.
 *
 * Justification for a dedicated file: existing `globalModeBadge.ui.test.tsx`
 * hardcodes `useSearchParams: () => new URLSearchParams()` with no projectId,
 * and `Ops1SessionScreen.test.tsx` does not exercise NouvelleDemandePageClient
 * query parsing. This file covers AC-04/05/07/08/09 at the page-client boundary.
 */
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NouvelleDemandePageClient } from "@/features/nouvelle-demande/NouvelleDemandePageClient";

const create = vi.fn();
const get = vi.fn();
const liveConfig = vi.fn();
let searchParams = new URLSearchParams();

vi.mock("next/navigation", () => ({
  useSearchParams: () => searchParams,
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

vi.mock("@/lib/ops1/actions", () => ({
  ops1CreateSessionAction: (...args: unknown[]) => create(...args),
  ops1GetSessionAction: (...args: unknown[]) => get(...args),
  ops1SendMessageAction: vi.fn(),
  ops1GetLiveConfigAction: (...args: unknown[]) => liveConfig(...args),
  ops1EnsureSfiaContextAction: vi.fn(async () => ({
    ok: true,
    data: { context: null },
  })),
  ops1GetSfiaContextAction: vi.fn(async () => ({
    ok: true,
    data: { context: null },
  })),
  ops1InstantiateCursorPromptAction: vi.fn(),
  ops1GetRealCursorAvailabilityAction: vi.fn(async () => ({
    ok: true,
    data: { flagEnabled: false, binPath: null, available: false },
  })),
  ops1AppendUserMessageAction: vi.fn(),
  ops1QualifyActionNotRequiredAction: vi.fn(),
  ops1CreateFixtureActionCandidateAction: vi.fn(),
  ops1RefineActionCandidateAction: vi.fn(),
  ops1RecordGateDecisionAction: vi.fn(),
  ops1RefuseExecutionAction: vi.fn(),
  ops1EvaluateAllowlistAction: vi.fn(),
  ops1CreateExecutionContractAction: vi.fn(),
  ops1RecordExecutionGateAction: vi.fn(),
  ops1RunExecutionAttemptAction: vi.fn(),
  ops1GenerateExecutionReportAction: vi.fn(),
  ops1ResumePostReportChatAction: vi.fn(),
  ops1CloseSessionAction: vi.fn(),
  ops1OpenContinuationAction: vi.fn(),
}));

describe("Workspace → OPS1 navigation continuity", () => {
  afterEach(() => cleanup());

  beforeEach(() => {
    vi.clearAllMocks();
    window.sessionStorage.clear();
    searchParams = new URLSearchParams();
    liveConfig.mockResolvedValue({
      ok: true,
      data: {
        available: false,
        missing: ["OPENAI_API_KEY", "OPENAI_MODEL"],
        testProvider: false,
      },
    });
  });

  it("shows Studio Project navigation context for a valid projectId query", async () => {
    const projectId = "prj:v2-a3-1";
    searchParams = new URLSearchParams({ projectId });
    render(<NouvelleDemandePageClient />);

    await waitFor(() => {
      expect(
        screen.getByTestId("ops1-studio-project-nav-context"),
      ).toBeVisible();
    });
    expect(screen.getByTestId("ops1-studio-project-id")).toHaveTextContent(
      projectId,
    );
    expect(
      screen.getByTestId("ops1-studio-project-nav-disclaimer"),
    ).toHaveTextContent(/Contexte de navigation uniquement/i);
    expect(
      screen.getByTestId("ops1-studio-project-nav-disclaimer"),
    ).toHaveTextContent(/pas liée ni persistée/i);
    expect(
      screen.getByRole("link", { name: "Retour au workspace" }),
    ).toHaveAttribute(
      "href",
      `/studio/projects/${encodeURIComponent(projectId)}`,
    );
    expect(create).not.toHaveBeenCalled();
    expect(
      await screen.findByTestId("ops1-empty-state"),
    ).toBeVisible();
    expect(
      screen.getByRole("button", { name: /Créer session fixture/i }),
    ).toBeVisible();
  });

  it("keeps historical OPS1 empty state when projectId is absent", async () => {
    render(<NouvelleDemandePageClient />);

    await waitFor(() => {
      expect(screen.getByTestId("ops1-empty-state")).toBeVisible();
    });
    expect(
      screen.queryByTestId("ops1-studio-project-nav-context"),
    ).toBeNull();
    expect(create).not.toHaveBeenCalled();
  });

  it("ignores invalid or oversized projectId without blocking OPS1", async () => {
    for (const projectId of [
      "not-a-project",
      "prj:",
      `prj:${"x".repeat(200)}`,
      "prj:has space",
    ]) {
      cleanup();
      searchParams = new URLSearchParams({ projectId });
      render(<NouvelleDemandePageClient />);

      await waitFor(() => {
        expect(screen.getByTestId("ops1-empty-state")).toBeVisible();
      });
      expect(
        screen.queryByTestId("ops1-studio-project-nav-context"),
      ).toBeNull();
      expect(create).not.toHaveBeenCalled();
    }
  });
});
