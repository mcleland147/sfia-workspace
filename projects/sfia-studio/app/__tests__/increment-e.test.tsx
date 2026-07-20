/**
 * @vitest-environment jsdom
 */
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { CycleActifScreen } from "@/features/cycle-actif/CycleActifScreen";

vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
  useSearchParams: () => new URLSearchParams(mockSearch),
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
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

vi.mock("@/lib/harness/incrementDAction", () => ({
  runIncrementDAction: vi.fn(),
}));

vi.mock("@/lib/harness/analysisAction", () => ({
  runAnalysisAction: vi.fn(async () => ({
    ok: true,
    status: "CANDIDATE_CREATED",
    analysisUiState: "AWAITING_MORRIS_FINAL_DECISION",
    candidate: {
      status: "PROVED_WITH_RESERVATIONS",
      proven: ["remote=0"],
      notProven: ["Morris final"],
      gaps: [],
      risks: [],
      reservations: ["candidate only"],
      candidateOnly: true,
      morrisDecisionRequired: true,
      closureAuthorized: false,
      finOps: { callNumber: 1, phase: "analyse" },
    },
  })),
}));

let mockPathname = "/cycle-actif";
let mockSearch = "vs=VS-UX-07";

afterEach(() => cleanup());
beforeEach(() => {
  mockPathname = "/cycle-actif";
  mockSearch = "vs=VS-UX-07";
});

describe("Increment E — Cycle actif analysis UI", () => {
  it("exposes analyse CTA on step 07", () => {
    render(<CycleActifScreen />);
    expect(screen.getByTestId("vs-inc-e-analyse")).toBeInTheDocument();
    expect(screen.getByTestId("vs-inc-e-finops")).toHaveTextContent(/analyse distinct/i);
  });

  it("keeps Inc D analyse CTA disabled on step 06", () => {
    mockSearch = "vs=VS-UX-06";
    render(<CycleActifScreen />);
    expect(screen.getByTestId("vs-inc-d-analyze-disabled")).toBeDisabled();
  });
});

describe("Increment E — closure UI", () => {
  it("decision shows recorded CLOSE_SLICE when closure=inc-e", async () => {
    mockPathname = "/decision";
    mockSearch = "vs=VS-UX-09&closure=inc-e";
    const { DecisionScreen } = await import("@/features/decision/DecisionScreen");
    render(<DecisionScreen />);
    expect(screen.getByTestId("vs-inc-e-morris-decision")).toBeInTheDocument();
    expect(screen.getByTestId("vs-inc-e-decided-at")).toHaveTextContent(/Morris/);
    expect(screen.queryByTestId("vs-final-CLOTURER")).not.toBeInTheDocument();
  });

  it("synthese shows CLOSED_WITH_RESERVATIONS without MVP claim", async () => {
    mockPathname = "/synthese";
    mockSearch = "vs=VS-UX-10&closure=inc-e";
    const { SyntheseScreen } = await import("@/features/synthese/SyntheseScreen");
    render(<SyntheseScreen />);
    expect(screen.getByTestId("vs-inc-e-final-status")).toHaveTextContent(
      "CLOSED_WITH_RESERVATIONS",
    );
    expect(screen.getByTestId("vs-no-mvp-claim")).toBeInTheDocument();
    expect(screen.getByTestId("vs-inc-e-trajectory")).toBeInTheDocument();
    expect(screen.getByTestId("vs-inc-e-decision-recorded")).toHaveTextContent(/CLOSE_SLICE/);
    expect(screen.getByTestId("vs-inc-e-final-not-proven").textContent).not.toMatch(
      /Morris decision required/i,
    );
    expect(screen.getByTestId("vs-inc-e-final-not-proven").textContent).not.toMatch(
      /Increment E completion/i,
    );
    expect(screen.getByTestId("vs-inc-e-resolved-by-morris")).toBeInTheDocument();
    expect(screen.queryByText(/Portefeuille des cycles/i)).not.toBeInTheDocument();
  });
});
