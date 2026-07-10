import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { ProchainesActionsList } from "@/components/prochaines-actions/ProchainesActionsList";
import { listProchainesActions } from "@/lib/prochaines-actions/queries";

export const dynamic = "force-dynamic";

export default async function ProchainesActionsPage() {
  const items = await listProchainesActions();

  return (
    <AppShell activeNav="dashboard">
      <div className="flex min-h-full flex-1 flex-col bg-surface">
        <header className="flex h-[200px] shrink-0 flex-col justify-center gap-2 bg-navy-hero px-8 pb-6 pt-8 text-white">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-1.5 text-[13px] text-slate-400 transition hover:text-slate-200"
          >
            <span aria-hidden="true">←</span>
            Tableau de bord
          </Link>
          <div className="flex flex-col gap-1">
            <p className="text-xs text-slate-400">Vue transverse</p>
            <h1 className="text-[26px] font-bold leading-tight tracking-tight">Prochaines actions</h1>
          </div>
          <p className="text-sm text-slate-400">
            Actions dérivées automatiquement des tâches, réserves, jalons et retards.
          </p>
          <span className="inline-flex w-fit rounded-full bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-400">
            100 % dérivé — pas de saisie manuelle
          </span>
        </header>

        <div className="flex-1 px-8 pb-10 pt-8">
          <ProchainesActionsList items={items} />
        </div>
      </div>
    </AppShell>
  );
}
