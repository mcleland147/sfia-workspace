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
  runIncrementDAction: vi.fn(async () => ({
    ok: true,
    status: "SUCCEEDED",
    report: {
      status: "SUCCEEDED",
      contractId: "ctr-mock",
      contractHash: "abc123",
      actualBranch: "delivery/sfia-studio-poc-increment-d",
      actualHead: "0123456789ab",
      allowlistedWritePaths: ["projects/sfia-studio/.sandbox/increment-d/output.md"],
      filesCreated: ["output.md"],
      remoteGitWrites: 0,
      analysisAuthorized: false,
      mode: "fixture",
      reservations: ["Candidate proof only"],
    },
    markdownContent: "# SFIA Studio Increment D Sandbox Proof\n",
  })),
}));

let mockPathname = "/cycle-actif";
let mockSearch = "vs=VS-UX-05";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  mockPathname = "/cycle-actif";
  mockSearch = "vs=VS-UX-05";
});

describe("Increment D — Cycle actif UI", () => {
  it("exposes STOP with accessible name", () => {
    render(<CycleActifScreen />);
    expect(screen.getByTestId("vs-stop-execution")).toHaveAttribute(
      "aria-label",
      expect.stringMatching(/STOP Morris/i),
    );
  });

  it("shows remote=0 expectation", () => {
    render(<CycleActifScreen />);
    expect(screen.getByTestId("vs-inc-d-remote-zero")).toHaveTextContent(/0/);
  });

  it("disables analysis CTA on report step", () => {
    mockSearch = "vs=VS-UX-06";
    render(<CycleActifScreen />);
    expect(screen.getByTestId("vs-inc-d-analyze-disabled")).toBeDisabled();
    expect(screen.getByTestId("vs-inc-d-analyze-disabled")).toHaveTextContent(
      /Increment E non disponible/i,
    );
  });

  it("exposes process mode distinct from S1 cursorMode schema", () => {
    mockSearch = "vs=VS-UX-06";
    render(<CycleActifScreen />);
    expect(screen.getByTestId("vs-inc-d-process-mode")).toHaveTextContent(/processMode=/);
    expect(screen.getByTestId("vs-inc-d-process-mode")).toHaveTextContent(
      /s1\.cursorMode=fixture/,
    );
  });

  it("keeps CursorExecutionReport panel without fifth route", () => {
    mockSearch = "vs=VS-UX-06";
    render(<CycleActifScreen />);
    expect(screen.getByTestId("vs-inc-d-status")).toBeInTheDocument();
    expect(screen.getByTestId("vs-cycle-actif")).toBeInTheDocument();
  });
});
