import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { UtilityRail } from "@/components/shell/UtilityRail";

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

afterEach(cleanup);

describe("canonical Studio navigation (G-UX-02)", () => {
  it("exposes only primary Studio routes — historical peers hidden", () => {
    render(<UtilityRail variant="flush" activeRoute="/studio" />);

    expect(screen.getByLabelText("Projets")).toHaveAttribute(
      "href",
      "/studio",
    );
    expect(screen.getByLabelText("Nouveau projet")).toHaveAttribute(
      "href",
      "/studio/projects/new",
    );
    expect(screen.queryByLabelText(/Vue synthèse/i)).toBeNull();
    expect(screen.queryByLabelText(/Nouvelle demande/i)).toBeNull();
    expect(screen.queryByLabelText(/Cycle actif/i)).toBeNull();
    expect(screen.queryByLabelText(/Décision Morris/i)).toBeNull();
    expect(screen.queryByTestId("rail-d1-workspace")).toBeNull();
    expect(screen.queryByTestId("rail-ops1-legacy")).toBeNull();
    expect(screen.getByTestId("rail-avatar")).toBeTruthy();
  });

  it("shows current project when on a project route", () => {
    render(
      <UtilityRail
        variant="flush"
        activeRoute={"/studio/projects/prj:demo" as never}
      />,
    );
    expect(screen.getByTestId("rail-current-project")).toHaveAttribute(
      "aria-label",
      "Projet courant",
    );
  });
});

describe("keyboard focus smoke", () => {
  it("renders focusable navigation links", () => {
    const { container } = render(
      <UtilityRail variant="floating" activeRoute="/studio" />,
    );
    const nav = within(container).getByRole("navigation");
    const homeLink = within(nav).getByLabelText("Projets");
    homeLink.focus();
    expect(homeLink).toHaveFocus();
  });
});
