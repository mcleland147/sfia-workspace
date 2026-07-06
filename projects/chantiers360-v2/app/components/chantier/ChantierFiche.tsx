import type { Chantier } from "@/lib/db/schema";
import type { ChantierStatus } from "@/lib/chantiers/types";
import { BackToDashboardLink } from "@/components/layout/AppShell";
import { StatusSelector } from "./StatusSelector";

function formatDate(value: string | null): string {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

const placeholderTabs = [
  { label: "Tâches", hint: "INC-02" },
  { label: "Réserves", hint: "INC-02" },
  { label: "Jalons", hint: "INC-03" },
  { label: "Comptes rendus", hint: "INC-04" },
];

export function ChantierFiche({ chantier }: { chantier: Chantier }) {
  const status = chantier.status as ChantierStatus;

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

      <section className="mt-6 rounded-2xl bg-white p-8 shadow-card">
        <h2 className="text-sm font-semibold text-slate-900">Planning simple</h2>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs text-slate-400">Début prévu</dt>
            <dd className="text-sm text-slate-700">{formatDate(chantier.plannedStartDate)}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Fin prévue</dt>
            <dd className="text-sm text-slate-700">{formatDate(chantier.plannedEndDate)}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">Prochaine intervention</dt>
            <dd className="text-sm text-slate-700">{formatDate(chantier.nextInterventionDate)}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs text-slate-400">Commentaire</dt>
            <dd className="text-sm text-slate-700">
              {chantier.simplePlanningComment || "—"}
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-6">
        <div className="flex flex-wrap gap-2 border-b border-slate-200">
          {placeholderTabs.map((tab) => (
            <span
              key={tab.label}
              className="cursor-not-allowed rounded-t-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-400"
              title={`${tab.hint} — hors périmètre INC-01`}
            >
              {tab.label}
              <span className="ml-2 text-[10px] uppercase">{tab.hint}</span>
            </span>
          ))}
        </div>
        <div className="rounded-b-2xl rounded-tr-2xl bg-white p-8 text-sm text-slate-500 shadow-card">
          Sections opérationnelles disponibles à partir de l&apos;incrément suivant.
        </div>
      </section>
    </div>
  );
}
