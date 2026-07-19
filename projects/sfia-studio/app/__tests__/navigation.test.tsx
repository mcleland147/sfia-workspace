import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { UtilityRail } from "@/components/shell/UtilityRail";
import { STUDIO_ROUTES } from "@/lib/navigation";

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

describe("navigation links", () => {
  it("exposes four primary routes on the rail", () => {
    render(<UtilityRail variant="flush" activeRoute="/synthese" />);

    for (const route of STUDIO_ROUTES) {
      expect(screen.getByLabelText(route.label)).toHaveAttribute(
        "href",
        route.route,
      );
    }

    expect(screen.getByLabelText("Paramètres (désactivé)")).toBeDisabled();
  });
});

describe("keyboard focus smoke", () => {
  it("renders focusable navigation links", () => {
    const { container } = render(
      <UtilityRail variant="floating" activeRoute="/nouvelle-demande" />,
    );
    const nav = within(container).getByRole("navigation");
    const homeLink = within(nav).getByLabelText("Vue synthèse");
    homeLink.focus();
    expect(homeLink).toHaveFocus();
  });
});
