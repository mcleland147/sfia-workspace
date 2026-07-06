import type { Chantier, CompteRendu, Reserve, Tache } from "@/lib/db/schema";
import type { ChantierStatus } from "@/lib/chantiers/types";
import { formatDisplayDate } from "@/lib/planning/format";
import type { SimplePlanningData } from "@/lib/planning/types";
import { BackToDashboardLink } from "@/components/layout/AppShell";
import { StatusSelector } from "./StatusSelector";
import { ChantierOperationalTabs } from "./ChantierOperationalTabs";

function toPlanningData(chantier: Chantier): SimplePlanningData {
  return {
    plannedStartDate: chantier.plannedStartDate,
    plannedEndDate: chantier.plannedEndDate,
    nextInterventionDate: chantier.nextInterventionDate,
    upcomingMilestone: chantier.upcomingMilestone,
    simplePlanningComment: chantier.simplePlanningComment,
  };
}

export function ChantierFiche({
  chantier,
  taches,
  reserves,
  comptesRendus,
}: {
  chantier: Chantier;
  taches: Tache[];
  reserves: Reserve[];
  comptesRendus: CompteRendu[];
}) {
  const status = chantier.status as ChantierStatus;
  const planning = toPlanningData(chantier);

  return (
    <div className="flex-1 bg-surface px-8 py-8">
      <BackToDashboardLink />

      <header className="mt-6 rounded-2xl bg-white p-8 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Fiche chantier
        </p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">{chantier.title}</h1>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Client</dt>
            <dd className="mt-1 text-sm text-slate-800">{chantier.client}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Adresse</dt>
            <dd className="mt-1 text-sm text-slate-800">{chantier.address}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Statut</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-800">{chantier.status}</dd>
          </div>
        </dl>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <StatusSelector chantierId={chantier.id} currentStatus={status} />
        </div>
      </header>

      <section
        className="mt-6 rounded-2xl bg-white p-8 shadow-card"
        aria-label="Résumé planning simple"
      >
        <h2 className="text-sm font-semibold text-slate-900">Planning simple</h2>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs text-slate-400">Début prévu</dt>
            <dd className="text-sm text-slate-700">{formatDisplayDate(planning.plannedStartDate)}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Fin prévue</dt>
            <dd className="text-sm text-slate-700">{formatDisplayDate(planning.plannedEndDate)}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Prochaine intervention</dt>
            <dd className="text-sm text-slate-700">
              {formatDisplayDate(planning.nextInterventionDate)}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Jalon à venir</dt>
            <dd className="text-sm text-slate-700">{planning.upcomingMilestone || "—"}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs text-slate-400">Commentaire</dt>
            <dd className="text-sm text-slate-700">{planning.simplePlanningComment || "—"}</dd>
          </div>
        </dl>
      </section>

      <ChantierOperationalTabs
        chantierId={chantier.id}
        taches={taches}
        reserves={reserves}
        planning={planning}
        comptesRendus={comptesRendus}
      />
    </div>
  );
}
