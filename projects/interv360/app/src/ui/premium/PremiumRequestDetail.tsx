import type { DemoRequest, DemoWorkflowEvent } from "../../domain/requestStatus";
import { getRequestStatusLabel } from "../../domain/requestStatus";
import {
  getCriticalityLabel,
  getPriorityLabel,
  getRequesterDisplay,
} from "../requests/requestIndicators";
import { PremiumBadge } from "./PremiumBadges";
import {
  getPremiumAssignee,
  getPremiumClientName,
  getPresentationRef,
} from "./premiumPresentationData";
import { PremiumWorkflowPipeline } from "./PremiumWorkflowPipeline";

interface PremiumRequestDetailProps {
  request: DemoRequest;
  workflowEvents?: DemoWorkflowEvent[];
  onBackToRequests?: () => void;
  onViewFullHistory?: () => void;
}

export function PremiumRequestDetail({
  request,
  workflowEvents = [],
  onBackToRequests,
  onViewFullHistory,
}: PremiumRequestDetailProps) {
  const ref = getPresentationRef(request.id);
  const client = getPremiumClientName(request.id, request.customerLabel);
  const assignee = getPremiumAssignee(
    request.id,
    request.assignedToDisplayName,
  );
  const statusLabel = getRequestStatusLabel(request.status);

  return (
    <section data-testid="request-detail" className="space-y-4">
      <header className="rounded-2xl bg-[linear-gradient(165deg,#070d18_0%,#0f1a2c_70%,#0a1019_100%)] px-6 py-5 text-white">
        {onBackToRequests ? (
          <button
            type="button"
            className="mb-2 text-xs font-semibold text-teal-300 hover:text-teal-200"
            onClick={onBackToRequests}
          >
            ← Retour aux demandes
          </button>
        ) : null}
        <p className="font-mono text-xs font-bold text-teal-400">{ref}</p>
        <h1 className="mt-1 text-2xl font-black tracking-tight">{request.title}</h1>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <PremiumBadge tone="status">{statusLabel}</PremiumBadge>
          <PremiumBadge tone="priority">{getPriorityLabel(request.priority)}</PremiumBadge>
          <span className="text-[10px] font-mono text-white/40">{request.status}</span>
        </div>
        <p className="mt-2 text-lg font-bold text-white/90">{client}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold">
            Technicien · {assignee}
          </span>
          <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold">
            Criticité · {getCriticalityLabel(request.criticality)}
          </span>
        </div>
      </header>

      <PremiumWorkflowPipeline request={request} />

      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-4">
          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="mb-3 text-sm font-bold text-slate-900">Vue d&apos;ensemble</h2>
            <dl className="grid gap-3 sm:grid-cols-2">
              <div>
                <dt className="text-[10px] font-bold uppercase text-slate-400">Demandeur</dt>
                <dd className="text-sm font-semibold">{getRequesterDisplay(request)}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase text-slate-400">Affectation</dt>
                <dd className="text-sm font-semibold">{assignee}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase text-slate-400">Site</dt>
                <dd className="text-sm font-semibold">{request.siteLabel}</dd>
              </div>
              {request.requesterTeam ? (
                <div>
                  <dt className="text-[10px] font-bold uppercase text-slate-400">Équipe</dt>
                  <dd className="text-sm font-semibold">{request.requesterTeam}</dd>
                </div>
              ) : null}
              {request.customerLabel ? (
                <div>
                  <dt className="text-[10px] font-bold uppercase text-slate-400">Client</dt>
                  <dd className="text-sm font-semibold">{request.customerLabel}</dd>
                </div>
              ) : null}
              <div>
                <dt className="text-[10px] font-bold uppercase text-slate-400">Canal</dt>
                <dd className="text-sm font-semibold">{request.channelLabel ?? "—"}</dd>
              </div>
            </dl>
          </section>

          {request.description ? (
            <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h2 className="mb-2 text-sm font-bold">Description demande</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                {request.description}
              </p>
            </section>
          ) : null}

          {request.qualificationSummary ? (
            <section
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              aria-labelledby="request-detail-qualification"
            >
              <h2
                className="mb-2 text-sm font-bold"
                id="request-detail-qualification"
              >
                Qualification
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                {request.qualificationSummary}
              </p>
            </section>
          ) : null}
        </div>

        <aside className="space-y-3">
          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="mb-2 text-sm font-bold">Score urgence</h2>
            <p className="text-3xl font-black text-orange-600">82</p>
            <p className="text-xs text-slate-500">Présentation UI — score simulé</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="mb-2 text-sm font-bold">SLA</h2>
            <p className="text-sm font-bold text-orange-600">Dépassé · +3h20</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="mb-2 text-sm font-bold">Activité récente</h2>
            <p className="text-xs text-slate-500">
              {workflowEvents.length} événement
              {workflowEvents.length > 1 ? "s" : ""} enregistré
              {workflowEvents.length > 1 ? "s" : ""}
            </p>
            {onViewFullHistory ? (
              <button
                type="button"
                className="mt-2 text-xs font-bold text-teal-800 underline"
                onClick={onViewFullHistory}
              >
                Tout voir
              </button>
            ) : null}
          </section>
        </aside>
      </div>
    </section>
  );
}
