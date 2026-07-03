import type { DemoRequest } from "../../domain/requestStatus";
import { getPipelinePresentation } from "../requests/requestPipelinePresentation";
import { PremiumBadge } from "./PremiumBadges";
import { cn } from "./cn";

interface PremiumWorkflowPipelineProps {
  request: DemoRequest;
}

export function PremiumWorkflowPipeline({ request }: PremiumWorkflowPipelineProps) {
  const presentation = getPipelinePresentation(request);

  return (
    <section
      aria-label="Pipeline SAV"
      className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.6fr_0.8fr]">
        <div className="border-b border-slate-200 bg-slate-50 p-4 lg:border-b-0 lg:border-r">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Pipeline SAV
          </p>
          <p className="mt-1 text-2xl font-black text-slate-900">
            {presentation.currentStep}
            <span className="text-base font-semibold text-slate-400">
              {" "}
              / {presentation.totalSteps}
            </span>
          </p>
          <p className="text-xs font-semibold text-slate-500">Étape en cours</p>
          <p className="mt-2 text-sm font-bold text-teal-800">
            {presentation.statusLabel}
          </p>
          {presentation.slaOverdue ? (
            <div className="mt-3 rounded-lg border border-orange-500/20 bg-orange-500/10 p-2">
              <p className="text-[10px] font-bold uppercase text-orange-700">
                SLA dépassé
              </p>
              <p className="text-lg font-black text-orange-700">
                {presentation.slaDelay}
              </p>
            </div>
          ) : null}
        </div>

        <div className="border-b border-slate-200 p-4 lg:border-b-0 lg:border-r">
          <PremiumBadge tone="status" className="mb-3">
            En cours
          </PremiumBadge>
          <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {presentation.steps.map((step, index) => (
              <li
                key={step.label}
                className={cn(
                  "rounded-lg border p-2.5",
                  step.state === "active" &&
                    "border-teal-500/40 bg-teal-500/10 shadow-sm",
                  step.state === "done" && "border-slate-200 bg-slate-50",
                  step.state === "upcoming" && "border-slate-100 bg-white opacity-70",
                )}
              >
                <span className="text-[10px] font-bold text-slate-400">
                  {index + 1}
                </span>
                <p className="text-xs font-bold text-slate-800">{step.label}</p>
                <p className="text-[10px] text-slate-500">{step.subLabel}</p>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-xs text-slate-600">
            <strong>Prochaine action :</strong> {presentation.nextAction}
          </p>
        </div>

        <div className="p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Responsable
          </p>
          <p className="mt-1 text-sm font-bold text-slate-900">
            {presentation.assignee}
          </p>
          <span className="mt-3 inline-flex rounded-lg bg-teal-600 px-3 py-1.5 text-[11px] font-bold text-white opacity-80">
            {presentation.ctaLabel}
          </span>
          <p className="mt-2 text-[10px] text-slate-400">
            Action visuelle — contrôles workflow dans le panneau Actions
          </p>
        </div>
      </div>
    </section>
  );
}
