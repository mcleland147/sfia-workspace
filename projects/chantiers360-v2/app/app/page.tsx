import { AppShell } from "@/components/layout/AppShell";
import { DashboardPage } from "@/components/dashboard/DashboardPage";
import { listChantiers } from "@/lib/chantiers/queries";
import {
  buildDashboardStats,
  buildHeroSubtitle,
  toChantierCardData,
} from "@/lib/chantiers/mappers";

export const dynamic = "force-dynamic";

export default async function Home() {
  const rows = await listChantiers();
  const chantiers = rows.map(toChantierCardData);
  const stats = buildDashboardStats(rows);
  const subtitle =
    rows.length === 0
      ? "Aucun chantier — créez votre premier chantier pour démarrer INC-01."
      : buildHeroSubtitle(stats);

  return (
    <AppShell activeNav="dashboard">
      <DashboardPage chantiers={chantiers} stats={stats} subtitle={subtitle} />
    </AppShell>
  );
}
