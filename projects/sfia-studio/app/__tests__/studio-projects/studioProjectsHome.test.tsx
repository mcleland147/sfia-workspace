import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { StudioProjectsHome } from "@/features/studio-projects/StudioProjectsHome";

const { listProjectsRuntimeActionMock } = vi.hoisted(() => ({
  listProjectsRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  listProjectsRuntimeAction: listProjectsRuntimeActionMock,
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
});

describe("StudioProjectsHome", () => {
  it("shows empty state when no projects", async () => {
    listProjectsRuntimeActionMock.mockResolvedValue({
      ok: true,
      projects: [],
      disclosures: {},
    });

    render(<StudioProjectsHome />);

    await waitFor(() => {
      expect(screen.getByTestId("studio-projects-empty")).toBeInTheDocument();
    });
    expect(screen.getByTestId("studio-projects-create")).toHaveAttribute(
      "href",
      "/studio/projects/new",
    );
  });

  it("lists projects and links open to workspace", async () => {
    listProjectsRuntimeActionMock.mockResolvedValue({
      ok: true,
      projects: [
        {
          projectId: "prj:demo-1",
          title: "Projet démo",
          name: "Projet démo",
          status: "active",
          updatedAt: "2026-08-16T10:00:00.000Z",
        },
      ],
      disclosures: {},
    });

    render(<StudioProjectsHome />);

    await waitFor(() => {
      expect(screen.getByTestId("studio-projects-list")).toBeInTheDocument();
    });
    expect(screen.getByText("Projet démo")).toBeInTheDocument();
    expect(screen.getByTestId("studio-projects-open")).toHaveAttribute(
      "href",
      "/studio/projects/prj%3Ademo-1",
    );
  });
});
