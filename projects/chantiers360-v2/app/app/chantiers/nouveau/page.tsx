import { AppShell } from "@/components/layout/AppShell";
import { BackToDashboardLink } from "@/components/layout/AppShell";
import { CreateChantierForm } from "@/components/chantier/CreateChantierForm";

export const dynamic = "force-dynamic";

export default function NouveauChantierPage() {
  return (
    <AppShell activeNav="chantier">
      <div className="flex-1 bg-surface px-8 py-8">
        <BackToDashboardLink />
        <header className="mt-6 mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Nouveau chantier</h1>
          <p className="mt-2 text-sm text-slate-500">
            US-01 — création avec libellé, client et adresse obligatoires.
          </p>
        </header>
        <CreateChantierForm />
      </div>
    </AppShell>
  );
}
