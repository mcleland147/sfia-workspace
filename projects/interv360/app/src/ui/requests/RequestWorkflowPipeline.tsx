import type { DemoRequest } from "../../domain/requestStatus";
import { RequestBadges } from "./RequestBadges";
import { getPipelinePresentation } from "./requestPipelinePresentation";
import "./RequestWorkflowPipeline.css";

interface RequestWorkflowPipelineProps {
  request: DemoRequest;
}

export function RequestWorkflowPipeline({ request }: RequestWorkflowPipelineProps) {
  const presentation = getPipelinePresentation(request);

  return (
    <section
      className="workflow-pipeline"
      aria-label="Pipeline SAV"
    >
      <div className="workflow-pipeline__shell">
        <div className="workflow-pipeline__identity">
          <p className="workflow-pipeline__eyebrow">Pipeline SAV</p>
          <p className="workflow-pipeline__step-count">
            <strong>{presentation.currentStep}</strong>
            <span> / {presentation.totalSteps}</span>
          </p>
          <p className="workflow-pipeline__step-label">Étape en cours</p>
          <p className="workflow-pipeline__status-copy">
            {presentation.statusLabel}
          </p>
          {presentation.slaOverdue ? (
            <div className="workflow-pipeline__sla">
              <span className="workflow-pipeline__sla-label">SLA dépassé</span>
              <strong>{presentation.slaDelay}</strong>
              <RequestBadges request={request} compact showStatus={false} />
            </div>
          ) : null}
        </div>

        <div className="workflow-pipeline__track">
          <p className="workflow-pipeline__active-badge">En cours</p>
          <ol className="workflow-pipeline__steps">
            {presentation.steps.map((step, index) => (
              <li
                key={step.label}
                className={
                  step.state === "active"
                    ? "workflow-pipeline__step workflow-pipeline__step--active"
                    : step.state === "done"
                      ? "workflow-pipeline__step workflow-pipeline__step--done"
                      : "workflow-pipeline__step"
                }
              >
                <span className="workflow-pipeline__step-index">{index + 1}</span>
                <strong>{step.label}</strong>
                <span>{step.subLabel}</span>
              </li>
            ))}
          </ol>
          <p className="workflow-pipeline__next">
            <strong>Prochaine action :</strong> {presentation.nextAction}
          </p>
        </div>

        <div className="workflow-pipeline__owner">
          <p className="workflow-pipeline__owner-label">Responsable</p>
          <strong>{presentation.assignee}</strong>
          <span className="workflow-pipeline__cta" aria-hidden="true">
            {presentation.ctaLabel}
          </span>
          <span className="workflow-pipeline__cta-note">
            Action visuelle — contrôles workflow dans le panneau Actions
          </span>
        </div>
      </div>
    </section>
  );
}
