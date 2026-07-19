import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { STUDIO_ROUTES } from "@/lib/navigation";
import {
  STUDIO_ROUTES_ONLY,
  VS_STATE_IDS,
  VS_STATES,
  parseVsQuery,
} from "@/lib/vertical-slice";
import { vsFixture } from "@/fixtures/vertical-slice";
import { NouvelleDemandeScreen } from "@/features/nouvelle-demande/NouvelleDemandeScreen";
import { DecisionScreen } from "@/features/decision/DecisionScreen";
import { CycleActifScreen } from "@/features/cycle-actif/CycleActifScreen";
import { SyntheseScreen } from "@/features/synthese/SyntheseScreen";

const push = vi.fn();
let mockPathname = "/nouvelle-demande";
let mockSearch = "vs=VS-UX-01";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push, replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => mockPathname,
  useSearchParams: () => new URLSearchParams(mockSearch),
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
  push.mockClear();
});

beforeEach(() => {
  mockPathname = "/nouvelle-demande";
  mockSearch = "vs=VS-UX-01";
});

describe("Increment A — mapping & fixtures", () => {
  it("exposes exactly four Studio routes", () => {
    expect(STUDIO_ROUTES).toHaveLength(4);
    expect(STUDIO_ROUTES_ONLY).toEqual([
      "/nouvelle-demande",
      "/decision",
      "/cycle-actif",
      "/synthese",
    ]);
  });

  it("maps ten states plus four variants without extra routes", () => {
    expect(VS_STATES.filter((s) => s.kind === "state")).toHaveLength(10);
    expect(VS_STATES.filter((s) => s.kind === "variant")).toHaveLength(4);
    expect(VS_STATE_IDS).toHaveLength(14);
    const routes = new Set(VS_STATES.map((s) => s.route));
    expect([...routes].sort()).toEqual(
      ["/cycle-actif", "/decision", "/nouvelle-demande", "/synthese"].sort(),
    );
  });

  it("parses demo query aliases", () => {
    expect(parseVsQuery("04")).toBe("VS-UX-04");
    expect(parseVsQuery("GO-INVALID")).toBe("VS-UX-VAR-GO-INVALID");
  });

  it("uses demo fixtures without secrets or PII", () => {
    const blob = JSON.stringify(vsFixture);
    expect(blob).not.toMatch(/sk-|api[_-]?key|password|Bearer /i);
    expect(blob).not.toMatch(/@gmail\.com|numéro de sécurité/i);
    expect(vsFixture.gptCalls.ceiling).toBe("À définir");
    expect(vsFixture.gptCalls.noRetry).toMatch(/Aucun retry automatique/i);
  });
});

describe("Increment A — UI screens", () => {
  it("shows demo banner, ids and GPT ceiling on nouvelle demande", () => {
    render(<NouvelleDemandeScreen />);
    expect(screen.getByTestId("vs-demo-banner")).toHaveTextContent(
      /Données de démonstration/i,
    );
    expect(screen.getByTestId("vs-id-strip")).toHaveTextContent(
      vsFixture.requestId,
    );
    expect(screen.getByTestId("vs-gpt-counter")).toHaveTextContent(/À définir/);
    expect(screen.getByTestId("vs-no-retry")).toHaveTextContent(
      /Aucun retry automatique/i,
    );
    expect(screen.getByTestId("vs-demo-switcher")).toBeInTheDocument();
  });

  it("renders GO, NO-GO, Corriger, Abandonner as distinct actions", async () => {
    mockPathname = "/decision";
    mockSearch = "vs=VS-UX-04";
    const user = userEvent.setup();
    render(<DecisionScreen />);

    const panel = screen.getByTestId("vs-morris-actions");
    expect(within(panel).getByTestId("vs-gate-GO")).toBeInTheDocument();
    expect(within(panel).getByTestId("vs-gate-NO-GO")).toBeInTheDocument();
    expect(within(panel).getByTestId("vs-gate-CORRIGER")).toBeInTheDocument();
    expect(within(panel).getByTestId("vs-gate-ABANDONNER")).toBeInTheDocument();

    await user.click(within(panel).getByTestId("vs-gate-ABANDONNER"));
    const dialog = screen.getByTestId("vs-abandon-confirm");
    expect(dialog).toHaveTextContent(/abandonné/i);
    expect(
      within(dialog).getByRole("button", {
        name: /Confirmer abandonner le cycle/i,
      }),
    ).toBeEnabled();
  });

  it("shows CycleSummary without portfolio or MVP claims", () => {
    mockPathname = "/synthese";
    mockSearch = "vs=VS-UX-10";
    render(<SyntheseScreen />);
    expect(screen.getByTestId("vs-cycle-summary")).toBeInTheDocument();
    expect(screen.getByTestId("vs-no-portfolio")).toHaveTextContent(
      /portefeuille multi-projet/i,
    );
    expect(screen.getByTestId("vs-no-mvp-claim")).toHaveTextContent(/MVP/);
    expect(
      screen.queryByText(/Portefeuille des cycles/i),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("vs-summary-gpt")).toHaveTextContent(/À définir/);
  });

  it("exposes STOP control distinct from gate vocabulary", () => {
    mockPathname = "/cycle-actif";
    mockSearch = "vs=VS-UX-05";
    render(<CycleActifScreen />);
    expect(screen.getByTestId("vs-stop-execution")).toHaveAttribute(
      "aria-label",
      expect.stringMatching(/STOP Morris/i),
    );
    expect(screen.queryByTestId("vs-gate-ABANDONNER")).not.toBeInTheDocument();
  });
});
