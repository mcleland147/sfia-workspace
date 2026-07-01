import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DemoResetControl } from "./DemoResetControl";

describe("DemoResetControl", () => {
  it("renders the explicit demo reset button", () => {
    render(<DemoResetControl onReset={() => undefined} />);
    expect(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/données fictives de démonstration/i),
    ).toBeInTheDocument();
  });

  it("disables reset when not allowed for the role", () => {
    render(<DemoResetControl onReset={() => undefined} isResetDisabled />);
    expect(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    ).toHaveAttribute("aria-disabled", "true");
    expect(
      screen.getByText(/Action non autorisée pour le rôle actuel/i),
    ).toBeInTheDocument();
  });

  it("calls the reset handler without touching localStorage directly", () => {
    const onReset = vi.fn();

    render(<DemoResetControl onReset={onReset} />);
    fireEvent.click(
      screen.getByRole("button", { name: /Réinitialiser la démo/i }),
    );

    expect(onReset).toHaveBeenCalledTimes(1);
  });
});
