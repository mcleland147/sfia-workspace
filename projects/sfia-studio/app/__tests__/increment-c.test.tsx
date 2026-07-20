import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { STUDIO_ROUTES_ONLY } from "@/lib/vertical-slice";
import { NouvelleDemandeScreen } from "@/features/nouvelle-demande/NouvelleDemandeScreen";
import {
  DEMAND_TEXT_MAX_CHARS,
  validateDemandText,
} from "@/lib/harness/demandTextValidation";
import { readFileSync } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const push = vi.fn();
let mockPathname = "/nouvelle-demande";
let mockSearch = "vs=VS-UX-01";

const qualifyMock = vi.fn(async (req: {
  confirmedByUser: boolean;
  live?: boolean;
  demandText: string;
  requestId: string;
  correlationId: string;
}) => {
  if (!req.confirmedByUser) {
    return { ok: false, errorCode: "CONFIRMATION_REQUIRED", liveInvoked: false };
  }
  return {
    ok: true,
    status: "CANDIDATE_CREATED",
    liveInvoked: false,
    mode: "fixture",
    demandProvenance: {
      length: req.demandText.length,
      sha256Prefix: createHash("sha256").update(req.demandText, "utf8").digest("hex").slice(0, 16),
      preview: req.demandText.slice(0, 80),
    },
    candidate: {
      model: "gpt-5.4-mini",
      proposedCycle: req.demandText.toLowerCase().includes("cadrage")
        ? "cadrage"
        : "delivery-implementation",
      proposedProfile: "Standard",
      profileJustification: "Bounded delivery",
      proposedBlocks: req.demandText.toLowerCase().includes("cadrage")
        ? ["finops", "capitalisation-rex"]
        : ["securite"],
      proposedGates: ["G-MORRIS"],
      usage: {
        inputTokens: 100,
        outputTokens: 50,
        totalTokens: 150,
        estimatedCostEur: 0.001,
        callNumber: 1,
        costIsEstimate: true,
      },
      authority: {
        candidateOnly: true,
        morrisDecisionRequired: true,
        executionAuthorized: false,
      },
    },
  };
});

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push, replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => mockPathname,
  useSearchParams: () => new URLSearchParams(mockSearch),
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("@/lib/harness/qualifyAction", () => ({
  runQualificationAction: (req: unknown) => qualifyMock(req as never),
}));

vi.mock("@/lib/harness/actions", () => ({
  runStudioHarness: vi.fn(),
}));

afterEach(() => {
  cleanup();
  push.mockClear();
  qualifyMock.mockClear();
});

beforeEach(() => {
  mockPathname = "/nouvelle-demande";
  mockSearch = "vs=VS-UX-01";
  window.sessionStorage.clear();
});

const CAMPUS =
  "Je veux lancer un cycle de cadrage pour préparer le développement de Campus360.";

describe("Increment C — demandText validation", () => {
  it("rejects empty, too short, too long without truncation", () => {
    expect(validateDemandText("").code).toBe("EMPTY");
    expect(validateDemandText("   ").code).toBe("EMPTY");
    expect(validateDemandText("abcdefgh").code).toBe("TOO_SHORT");
    const long = "a".repeat(DEMAND_TEXT_MAX_CHARS + 1);
    const r = validateDemandText(long);
    expect(r.code).toBe("TOO_LONG");
    expect(r.normalized).toBe("");
    expect(long.length).toBe(DEMAND_TEXT_MAX_CHARS + 1);
    expect(validateDemandText(CAMPUS).ok).toBe(true);
    expect(validateDemandText(CAMPUS).normalized).toBe(CAMPUS);
  });
});

describe("Increment C — editable demand + confirmation", () => {
  it("starts empty and keeps qualify blocked until valid", async () => {
    const user = userEvent.setup();
    render(<NouvelleDemandeScreen />);
    const input = screen.getByTestId("vs-demand-input") as HTMLTextAreaElement;
    expect(input.value).toBe("");
    expect(screen.getByTestId("vs-qualify-open-confirm")).toHaveAttribute(
      "aria-disabled",
      "true",
    );
    expect(screen.getByTestId("vs-demand-text")).toHaveTextContent("(vide)");
    await user.click(screen.getByTestId("vs-qualify-open-confirm"));
    expect(screen.getByTestId("vs-demand-error")).toBeInTheDocument();
    expect(qualifyMock).not.toHaveBeenCalled();
  });

  it("accepts editable Campus360 demand and shows exact text in confirmation", async () => {
    const user = userEvent.setup();
    render(<NouvelleDemandeScreen />);
    const input = screen.getByTestId("vs-demand-input");
    await user.type(input, CAMPUS);
    expect(input).toHaveValue(CAMPUS);
    expect(screen.getByTestId("vs-demand-text")).toHaveTextContent(CAMPUS);
    expect(screen.getByTestId("vs-qualify-open-confirm")).toHaveAttribute(
      "aria-disabled",
      "false",
    );
    await user.click(screen.getByTestId("vs-qualify-open-confirm"));
    expect(screen.getByTestId("vs-confirm-demand-text")).toHaveTextContent(CAMPUS);
    expect(screen.getByTestId("vs-gpt-confirm-panel")).toHaveTextContent("gpt-5.4-mini");
    expect(screen.getByTestId("vs-gpt-confirm-panel")).toHaveTextContent("0,05");
  });

  it("refuses empty demand without calling qualifyAction", async () => {
    const user = userEvent.setup();
    render(<NouvelleDemandeScreen />);
    await user.click(screen.getByTestId("vs-qualify-open-confirm"));
    expect(screen.getByTestId("vs-demand-error")).toBeInTheDocument();
    expect(qualifyMock).not.toHaveBeenCalled();
  });

  it("back from confirmation allows editing again", async () => {
    const user = userEvent.setup();
    render(<NouvelleDemandeScreen />);
    await user.type(screen.getByTestId("vs-demand-input"), CAMPUS);
    await user.click(screen.getByTestId("vs-qualify-open-confirm"));
    await user.click(screen.getByTestId("vs-gpt-confirm-back"));
    expect(screen.queryByTestId("vs-gpt-confirm-panel")).not.toBeInTheDocument();
    await user.type(screen.getByTestId("vs-demand-input"), " — variante");
    expect(screen.getByTestId("vs-demand-input")).toHaveValue(`${CAMPUS} — variante`);
  });

  it("abandon from confirmation does not call GPT", async () => {
    const user = userEvent.setup();
    render(<NouvelleDemandeScreen />);
    await user.type(screen.getByTestId("vs-demand-input"), CAMPUS);
    await user.click(screen.getByTestId("vs-qualify-open-confirm"));
    await user.click(screen.getByTestId("vs-gpt-confirm-abandon"));
    expect(qualifyMock).not.toHaveBeenCalled();
  });

  it("transmits exact demandText to qualifyAction (anti-substitution)", async () => {
    const user = userEvent.setup();
    render(<NouvelleDemandeScreen />);
    await user.type(screen.getByTestId("vs-demand-input"), CAMPUS);
    await user.click(screen.getByTestId("vs-qualify-open-confirm"));
    await user.click(screen.getByTestId("vs-gpt-confirm-fixture"));
    expect(qualifyMock).toHaveBeenCalledTimes(1);
    const arg = qualifyMock.mock.calls[0][0];
    expect(arg.demandText).toBe(CAMPUS);
    expect(arg.live).toBe(false);
    expect(arg.requestId).toMatch(/^req-user-/);
    expect(arg.correlationId).toMatch(/^corr-user-/);
    expect(await screen.findByTestId("vs-qual-cycle")).toHaveTextContent("cadrage");
    expect(screen.getByTestId("vs-qual-mode")).toHaveTextContent("fixture");
    expect(screen.getByTestId("vs-submitted-demand")).toHaveTextContent(CAMPUS);
    expect(screen.getByTestId("vs-demand-provenance")).toHaveTextContent("sha256=");
    expect(screen.getByTestId("vs-morris-still-required")).toBeInTheDocument();
  });

  it("keeps four routes and no openai sdk in app qualify bridge", () => {
    expect(STUDIO_ROUTES_ONLY).toHaveLength(4);
    const src = readFileSync(
      path.resolve(__dirname, "../lib/harness/qualifyAction.ts"),
      "utf8",
    );
    expect(src).not.toMatch(/from ["']openai["']/);
    expect(src).not.toMatch(/api\.openai\.com/);
  });
});
