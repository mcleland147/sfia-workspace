import {
  DEMO_SCENARIO_STEPS,
  getScenarioStepCount,
} from "./demoScenarioSteps";
import "./DemoScenarioGuide.css";

interface DemoScenarioGuideProps {
  currentStepIndex: number;
  onPreviousStep: () => void;
  onNextStep: () => void;
  onResetScenario: () => void;
}

export function DemoScenarioGuide({
  currentStepIndex,
  onPreviousStep,
  onNextStep,
  onResetScenario,
}: DemoScenarioGuideProps) {
  const totalSteps = getScenarioStepCount();
  const currentStep = DEMO_SCENARIO_STEPS[currentStepIndex];
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === totalSteps - 1;

  if (!currentStep) {
    return null;
  }

  return (
    <section
      className="demo-scenario-guide"
      aria-label="Scénario guidé de démonstration"
    >
      <header className="demo-scenario-guide__header">
        <p className="demo-scenario-guide__eyebrow">Batch 02 — Scénario guidé</p>
        <h2 className="demo-scenario-guide__title">Pilotage de démonstration</h2>
        <p className="demo-scenario-guide__progress" role="status">
          Étape {currentStepIndex + 1} sur {totalSteps}
        </p>
      </header>

      <ol className="demo-scenario-guide__steps" aria-label="Étapes du scénario">
        {DEMO_SCENARIO_STEPS.map((step, index) => {
          const isCurrent = index === currentStepIndex;
          const isCompleted = index < currentStepIndex;

          return (
            <li
              key={step.id}
              className={
                isCurrent
                  ? "demo-scenario-guide__step demo-scenario-guide__step--current"
                  : isCompleted
                    ? "demo-scenario-guide__step demo-scenario-guide__step--completed"
                    : "demo-scenario-guide__step"
              }
              aria-current={isCurrent ? "step" : undefined}
            >
              <span className="demo-scenario-guide__step-index">{index + 1}</span>
              <span className="demo-scenario-guide__step-title">{step.title}</span>
            </li>
          );
        })}
      </ol>

      <div className="demo-scenario-guide__current">
        <h3 className="demo-scenario-guide__current-title">{currentStep.title}</h3>
        <p className="demo-scenario-guide__current-summary">{currentStep.summary}</p>
        <p className="demo-scenario-guide__help">
          <span className="demo-scenario-guide__help-label">Aide contextuelle</span>
          {currentStep.help}
        </p>
      </div>

      <div
        className="demo-scenario-guide__actions"
        role="group"
        aria-label="Navigation du scénario"
      >
        <button
          type="button"
          className="demo-scenario-guide__button"
          onClick={onPreviousStep}
          disabled={isFirstStep}
        >
          Étape précédente
        </button>
        <button
          type="button"
          className="demo-scenario-guide__button demo-scenario-guide__button--primary"
          onClick={onNextStep}
          disabled={isLastStep}
        >
          Étape suivante
        </button>
        <button
          type="button"
          className="demo-scenario-guide__button demo-scenario-guide__button--reset"
          onClick={onResetScenario}
        >
          Revenir au début du scénario
        </button>
      </div>
    </section>
  );
}
