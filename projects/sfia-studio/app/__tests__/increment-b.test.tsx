import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { STUDIO_ROUTES } from "@/lib/navigation";
import { STUDIO_ROUTES_ONLY } from "@/lib/vertical-slice";
import {
  actionForGateConfirm,
  buildStudioHarnessRequest,
} from "@/lib/harness/buildRequest";
import { DecisionScreen } from "@/features/decision/DecisionScreen";

const push = vi.fn();
let mockPathname = "/decision";
let mockSearch = "vs=VS-UX-04";

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

vi.mock("@/lib/harness/actions", () => ({
  runStudioHarness: vi.fn(async () => ({
    ok: true,
    statusSource: "harness",
    mode: "fixture",
    canonicalStatus: "CLOSED",
    goValid: true,
    contractHash: "abc",
    correlationId: "corr-test",
    proofDir: "/tmp/proof",
    events: [
      {
        eventId: "e1",
        eventType: "execution.closed",
        timestamp: "2026-07-20T00:00:00Z",
        requestId: "r",
        correlationId: "c",
        result: "completed",
      },
    ],
    report: { ok: true },
    proofPack: { ok: true, missing: [], present: ["summary.json"], integrityNotes: [] },
    reserves: [],
    timestamps: { completedAt: "2026-07-20T00:00:00Z" },
    realGptClaimed: false,
    realCursorClaimed: false,
    remoteGitWrite: false,
  })),
}));

afterEach(() => {
  cleanup();
  push.mockClear();
});

beforeEach(() => {
  mockPathname = "/decision";
  mockSearch = "vs=VS-UX-04";
});

describe("Increment B — adapter mapping (no authority)", () => {
  it("buildStudioHarnessRequest never invents GO validation fields as authority", () => {
    const req = buildStudioHarnessRequest("run-fixture");
    expect(req.action).toBe("run-fixture");
    expect(req.morrisDecision).toBe("GO");
    const src = readFileSync(
      path.resolve(__dirname, "../lib/harness/buildRequest.ts"),
      "utf8",
    );
    expect(src).not.toMatch(/GateValidator/);
    expect(src).not.toMatch(/contractHash\s*===/);
  });

  it("maps GO-INVALID to probe-invalid-head", () => {
    expect(
      actionForGateConfirm({ gateAction: "GO", stateId: "VS-UX-VAR-GO-INVALID" }),
    ).toBe("probe-invalid-head");
  });

  it("keeps exactly four routes", () => {
    expect(STUDIO_ROUTES).toHaveLength(4);
    expect(STUDIO_ROUTES_ONLY).toHaveLength(4);
  });
});

describe("Increment B — Studio derives harness status", () => {
  it("renders harness panel and fixture labels on decision", () => {
    render(<DecisionScreen />);
    expect(screen.getByTestId("vs-harness-idle")).toBeInTheDocument();
    expect(screen.getByTestId("vs-demo-banner")).toHaveTextContent("Incrément C");
    expect(screen.getByTestId("vs-status-source")).toBeInTheDocument();
  });
});

describe("Increment B — no live / no openai in app bridge", () => {
  it("invokeHarness and actions contain no OpenAI or live cursor calls", () => {
    const files = [
      "../lib/harness/invokeHarness.ts",
      "../lib/harness/actions.ts",
      "../lib/harness/buildRequest.ts",
    ];
    for (const rel of files) {
      const text = readFileSync(path.resolve(__dirname, rel), "utf8");
      expect(text).not.toMatch(/api\.openai\.com/i);
      expect(text).not.toMatch(/from ["']openai["']/);
      expect(text).not.toMatch(/SFIA_CURSOR_REAL_SPIKE\s*=\s*["']1["']/);
      expect(text).not.toMatch(/git push/);
    }
  });

  it("Studio P0 routes remain exactly four (no new feature route)", () => {
    expect(STUDIO_ROUTES_ONLY).toEqual([
      "/nouvelle-demande",
      "/decision",
      "/cycle-actif",
      "/synthese",
    ]);
    const appDir = path.resolve(__dirname, "../app");
    const featurePages = readdirSync(appDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .filter((name) =>
        ["nouvelle-demande", "decision", "cycle-actif", "synthese"].includes(name),
      );
    expect(featurePages.sort()).toEqual(
      ["cycle-actif", "decision", "nouvelle-demande", "synthese"].sort(),
    );
  });
});
