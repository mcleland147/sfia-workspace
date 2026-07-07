import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { ProchainesActionsList } from "@/components/prochaines-actions/ProchainesActionsList";
import { listProchainesActions } from "@/lib/prochaines-actions/queries";

export const dynamic = "force-dynamic";

export default async function ProchainesActionsPage() {
  const items = await listProchainesActions();

  return (
    <AppShell activeNav="dashboard">
      <div className="flex-1 bg-surface px-8 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Retour au tableau de bord
        </Link>

        <header className="mt-6 rounded-2xl bg-white p-8 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Vue transverse
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">Prochaines actions</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            Liste synthétique dérivée des tâches ouvertes, réserves ouvertes, jalons renseignés
            et chantiers en retard — sans saisie manuelle.
          </p>
        </header>

        <section
          className="mt-6 rounded-2xl bg-white p-8 shadow-card"
          aria-label="Prochaines actions dérivées"
        >
          <ProchainesActionsList items={items} />
        </section>
      </div>
    </AppShell>
  );
}
