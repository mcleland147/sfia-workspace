import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { StudioShell } from "@/components/shell/StudioShell";

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

describe("StudioShell", () => {
  it("renders navigation and main landmarks", () => {
    render(
      <StudioShell
        variant="flush"
        activeRoute="/synthese"
        title="Vue synthèse"
        copilot={{
          variant: "flush",
          name: "Nora · Project Copilot",
          subtitle: "Vue consolidée active",
          summary: "Test summary",
        }}
      >
        <p>Contenu test</p>
      </StudioShell>,
    );

    expect(screen.getByTestId("studio-shell")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Navigation principale" })).toBeInTheDocument();
    expect(screen.getByRole("main", { name: "Contenu principal" })).toBeInTheDocument();
    expect(screen.getByRole("complementary", { name: "Copilot Nora" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Vue synthèse" })).toBeInTheDocument();
  });
});
