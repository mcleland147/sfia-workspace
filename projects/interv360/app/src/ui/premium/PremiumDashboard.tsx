import type { DemoRequest } from "../../domain/requestStatus";
import { PremiumAvatar, PremiumBadge } from "./PremiumBadges";
import { cn } from "./cn";
import {
  COMMAND_CENTER_ACTIVITY,
  COMMAND_CENTER_CHANNEL_DIST,
  COMMAND_CENTER_INTERVENTIONS,
  COMMAND_CENTER_STATUS_DIST,
  COMMAND_CENTER_TEAM,
  getCommandCenterKpis,
  getFocusPresentationItems,
  type CommandCenterKpi,
} from "./premiumPresentationData";

interface PremiumDashboardProps {
  requests: DemoRequest[];
  onNavigateToRequests?: () => void;
  onOpenRequest?: (requestId: string) => void;
}

const KPI_BORDER: Record<string, string> = {
  teal: "border-t-teal-500",
  amber: "border-t-amber-500",
  orange: "border-t-orange-500",
  rose: "border-t-rose-500",
  blue: "border-t-blue-500",
  purple: "border-t-violet-500",
};

const KPI_SPARK: Record<string, string> = {
  teal: "bg-teal-400/50",
  amber: "bg-amber-400/50",
  orange: "bg-orange-400/50",
  rose: "bg-rose-400/50",
  blue: "bg-blue-400/50",
  purple: "bg-violet-400/50",
};

function KpiTrend({ kpi }: { kpi: CommandCenterKpi }) {
  const cls =
    kpi.trendGood === true
      ? "bg-emerald-500/15 text-emerald-400"
      : kpi.trendGood === false
        ? "bg-orange-500/15 text-orange-400"
        : "bg-white/10 text-white/45";
  return (
    <span className={cn("rounded-full px-1.5 py-0.5 text-[10px] font-bold", cls)}>
      {kpi.trend}
    </span>
  );
}

export function PremiumDashboard({
  requests,
  onNavigateToRequests,
  onOpenRequest,
}: PremiumDashboardProps) {
  const kpis = getCommandCenterKpis(requests);
  const focusItems = getFocusPresentationItems(requests);
  const statusMax = Math.max(...COMMAND_CENTER_STATUS_DIST.map((e) => e.count), 1);
  const channelMax = Math.max(...COMMAND_CENTER_CHANNEL_DIST.map((e) => e.count), 1);
  const teamAvailable = COMMAND_CENTER_TEAM.filter((m) => m.available).length;

  return (
    <section aria-label="Centre de commande SAV" className="-mx-0">
      <div className="bg-[radial-gradient(ellipse_80%_60%_at_90%_0%,rgba(13,148,136,0.12),transparent_55%),radial-gradient(ellipse_50%_40%_at_10%_100%,rgba(59,130,246,0.08),transparent_50%),linear-gradient(165deg,#070d18_0%,#0b1220_35%,#0f1a2c_70%,#0a1019_100%)] px-6 pb-4 pt-5 text-white">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal-400">
                Tableau de bord · SAV
              </p>
              <PremiumBadge tone="live">Live</PremiumBadge>
            </div>
            <h1 className="text-[1.75rem] font-black tracking-tight">
              Centre de commande SAV
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-white/45">
              Pilotez l&apos;activité, les urgences et les interventions terrain en
              temps réel.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold text-white/65">
              Sync il y a 2 min
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold text-white/65">
              Espace Responsable SAV
            </span>
            <button
              type="button"
              disabled
              title="Présentation UI — non fonctionnel"
              className="rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 px-4 py-2 text-xs font-bold text-white shadow-[0_4px_16px_rgba(13,148,136,0.35)] disabled:opacity-85"
            >
              + Nouvelle demande
            </button>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-2" aria-label="Indicateurs clés">
          {kpis.map((kpi) => (
            <article
              key={kpi.label}
              className={cn(
                "relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] px-3 pb-2 pt-2.5",
                KPI_BORDER[kpi.tone],
                "border-t-2",
              )}
            >
              <div className="flex items-start justify-between">
                <p className="text-2xl font-black tracking-tight">{kpi.value}</p>
                <KpiTrend kpi={kpi} />
              </div>
              <p className="mt-0.5 text-[11px] font-semibold text-white/40">
                {kpi.label}
              </p>
              <div className="mt-1.5 flex h-4 items-end gap-0.5">
                {kpi.spark.map((h, i) => (
                  <span
                    key={i}
                    className={cn("flex-1 rounded-sm", KPI_SPARK[kpi.tone])}
                    style={{ height: `${h}%`, minHeight: 2 }}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="space-y-3 bg-[#eef2f7] px-6 py-3">
        <div className="grid grid-cols-[1.65fr_0.85fr] gap-3">
          <section
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            aria-label="Focus opérationnel"
            role="region"
          >
            <header className="mb-3 flex items-start justify-between gap-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Focus opérationnel
                </p>
                <h2 className="text-sm font-bold text-slate-900">Actions prioritaires</h2>
              </div>
              <span className="rounded-full border border-rose-500/20 bg-rose-500/10 px-2 py-0.5 text-[10px] font-bold text-rose-600">
                {focusItems.length} actions requises
              </span>
            </header>
            <ul className="space-y-2">
              {focusItems.map((item, index) => (
                <li key={item.requestId}>
                  <article
                    className={cn(
                      "relative grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-slate-200 bg-slate-50/80 p-3",
                      item.tagTone === "orange" && "before:absolute before:bottom-0 before:left-0 before:top-0 before:w-[3px] before:rounded-l-lg before:bg-orange-500",
                      item.tagTone === "rose" && "before:absolute before:bottom-0 before:left-0 before:top-0 before:w-[3px] before:rounded-l-lg before:bg-rose-500",
                    )}
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-teal-500/10 text-xs font-black text-teal-800">
                      {index + 1}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-mono text-[11px] font-bold text-teal-800">
                          {item.ref}
                        </span>
                        <PremiumBadge tone="status">{item.statusLabel}</PremiumBadge>
                        <PremiumBadge tone="priority">{item.priorityLabel}</PremiumBadge>
                        {item.indicator === "retard" ? (
                          <PremiumBadge tone="late">Retard</PremiumBadge>
                        ) : null}
                        {item.indicator === "anomalie" ? (
                          <PremiumBadge tone="anomaly">Anomalie</PremiumBadge>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm font-bold text-slate-800">{item.client}</p>
                      <span
                        className={cn(
                          "mt-1 inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold",
                          item.tagTone === "orange" && "bg-orange-500/10 text-orange-700",
                          item.tagTone === "rose" && "bg-rose-500/10 text-rose-700",
                        )}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                        <PremiumAvatar initials={item.initials} />
                        {item.assignee}
                      </div>
                      <button
                        type="button"
                        className="rounded-md border border-slate-300 px-2 py-1 text-[10px] font-bold text-slate-600 hover:border-teal-600 hover:text-teal-800"
                        onClick={() => onOpenRequest?.(item.requestId)}
                      >
                        Ouvrir ↗
                      </button>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="rounded-xl border border-white/10 bg-gradient-to-b from-[#0a0f1a] to-[#0d1524] p-4 text-white shadow-md"
            aria-label="Charge équipe"
          >
            <header className="mb-3 flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                  Charge équipe
                </p>
                <h2 className="text-sm font-bold">Capacité terrain</h2>
              </div>
              <span className="text-[10px] font-semibold text-white/35">Aujourd&apos;hui</span>
            </header>
            <ul className="space-y-2.5">
              {COMMAND_CENTER_TEAM.map((member) => (
                <li key={member.name}>
                  <div className="mb-1 grid grid-cols-[auto_1fr_auto] items-center gap-2">
                    <PremiumAvatar initials={member.initials} dark />
                    <div>
                      <p className="text-xs font-bold">
                        {member.name}
                        {!member.available ? (
                          <span className="ml-1 text-orange-400">!</span>
                        ) : null}
                      </p>
                      <p className="text-[10px] text-white/40">
                        {member.total} demande{member.total > 1 ? "s" : ""}
                        {member.critical > 0
                          ? ` · ${member.critical} critique${member.critical > 1 ? "s" : ""}`
                          : ""}
                      </p>
                    </div>
                    <span className="text-xs font-black">{member.loadPercent}%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className={cn(
                        "h-full rounded-full",
                        member.loadPercent >= 75
                          ? "bg-gradient-to-r from-orange-500 to-orange-400"
                          : member.loadPercent >= 50
                            ? "bg-gradient-to-r from-teal-600 to-teal-400"
                            : "bg-gradient-to-r from-emerald-500 to-emerald-400",
                      )}
                      style={{ width: `${member.loadPercent}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <footer className="mt-3 flex justify-between border-t border-white/10 pt-2 text-[10px] font-semibold text-white/40">
              <span>{teamAvailable} disponibles</span>
              <span>{COMMAND_CENTER_TEAM.length - teamAvailable} saturé</span>
            </footer>
          </section>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm" aria-label="Activité récente">
            <header className="mb-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Activité récente
              </p>
              <h2 className="text-sm font-bold">Flux temps réel</h2>
            </header>
            <ul className="space-y-2">
              {COMMAND_CENTER_ACTIVITY.map((entry, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_auto_1fr] gap-2">
                  <span className="font-mono text-[11px] font-bold text-slate-700">
                    {entry.time}
                  </span>
                  <span
                    className="mt-1 h-2 w-2 rounded-full"
                    style={{ background: entry.dot }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-medium text-slate-800">
                      {entry.action}
                      {entry.ref ? (
                        <span
                          className="ml-1 font-mono font-bold"
                          style={{ color: entry.refTone }}
                        >
                          {entry.ref}
                        </span>
                      ) : null}
                    </p>
                    <p className="text-[10px] text-slate-400">{entry.actor}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm" aria-label="Interventions du jour">
            <header className="mb-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Interventions du jour
              </p>
              <h2 className="text-sm font-bold">Planning terrain</h2>
            </header>
            <ul className="space-y-2">
              {COMMAND_CENTER_INTERVENTIONS.map((item) => (
                <li
                  key={item.time}
                  className={cn(
                    "grid grid-cols-[2.5rem_1fr_auto] gap-2",
                    item.done && "opacity-60",
                  )}
                >
                  <span className="font-mono text-[11px] font-bold">{item.time}</span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{item.client}</p>
                    <p className="flex items-center gap-1 text-[10px] text-slate-400">
                      <PremiumAvatar initials={item.initials} className="h-5 w-5 text-[9px]" />
                      {item.tech}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "text-[10px] font-bold",
                      item.done ? "text-teal-700" : "text-blue-600",
                    )}
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <div className="space-y-2">
            <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm" aria-label="Répartition par statut">
              <header className="mb-2 flex justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Répartition
                  </p>
                  <h2 className="text-sm font-bold">Par statut</h2>
                </div>
                <span className="text-[10px] text-slate-400">10 demandes</span>
              </header>
              <ul className="space-y-1.5">
                {COMMAND_CENTER_STATUS_DIST.map((entry) => (
                  <li
                    key={entry.label}
                    className="grid grid-cols-[1fr_4rem_auto] items-center gap-2"
                  >
                    <span className="text-[11px] text-slate-500">{entry.label}</span>
                    <div className="h-1 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(entry.count / statusMax) * 100}%`,
                          background: entry.color,
                        }}
                      />
                    </div>
                    <strong className="text-xs">{entry.count}</strong>
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm" aria-label="Répartition par canal">
              <header className="mb-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Par canal
                </p>
                <h2 className="text-sm font-bold">Origine des demandes</h2>
              </header>
              <ul className="space-y-1.5">
                {COMMAND_CENTER_CHANNEL_DIST.map((entry) => (
                  <li
                    key={entry.label}
                    className="grid grid-cols-[1fr_4rem_auto] items-center gap-2"
                  >
                    <span className="text-[11px] text-slate-500">{entry.label}</span>
                    <div className="h-1 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(entry.count / channelMax) * 100}%`,
                          background: entry.color,
                        }}
                      />
                    </div>
                    <strong className="text-xs">{entry.count}</strong>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {onNavigateToRequests ? (
          <p className="pb-2 text-[11px] text-slate-400">
            <button
              type="button"
              className="font-bold text-teal-800 underline"
              onClick={onNavigateToRequests}
            >
              Voir toutes les demandes
            </button>
            {" · "}
            Présentation UI premium — données de démonstration.
          </p>
        ) : null}
      </div>
    </section>
  );
}
