import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DemoScenarioGuide } from "./DemoScenarioGuide";
import { DEMO_SCENARIO_STEPS } from "./demoScenarioSteps";

describe("DemoScenarioGuide", () => {
  it("renders the guided scenario and first step", () => {
    render(
      <DemoScenarioGuide
        currentStepIndex={0}
        onPreviousStep={vi.fn()}
        onNextStep={vi.fn()}
        onResetScenario={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("region", { name: /Scénario guidé de démonstration/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Étape 1 sur 6/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: DEMO_SCENARIO_STEPS[0].title }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Aide contextuelle/i)).toBeInTheDocument();
    expect(
      screen.getByText(/plusieurs demandes locales fictives/i),
    ).toBeInTheDocument();
  });

  it("navigates between steps with previous and next actions", () => {
    const onPreviousStep = vi.fn();
    const onNextStep = vi.fn();

    const { rerender } = render(
      <DemoScenarioGuide
        currentStepIndex={0}
        onPreviousStep={onPreviousStep}
        onNextStep={onNextStep}
        onResetScenario={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("button", { name: /Étape précédente/i }),
    ).toBeDisabled();
    fireEvent.click(screen.getByRole("button", { name: /Étape suivante/i }));
    expect(onNextStep).toHaveBeenCalledTimes(1);

    rerender(
      <DemoScenarioGuide
        currentStepIndex={2}
        onPreviousStep={onPreviousStep}
        onNextStep={onNextStep}
        onResetScenario={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /Étape précédente/i }));
    expect(onPreviousStep).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/Étape 3 sur 6/i)).toBeInTheDocument();
  });

  it("calls scenario reset without business actions", () => {
    const onResetScenario = vi.fn();

    render(
      <DemoScenarioGuide
        currentStepIndex={3}
        onPreviousStep={vi.fn()}
        onNextStep={vi.fn()}
        onResetScenario={onResetScenario}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", { name: /Revenir au début du scénario/i }),
    );

    expect(onResetScenario).toHaveBeenCalledTimes(1);
  });
});
