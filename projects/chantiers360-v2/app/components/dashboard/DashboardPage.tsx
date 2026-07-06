import { DashboardHero } from "./DashboardHero";
import { ChantiersGrid } from "./ChantiersGrid";
import { RightPanels } from "./RightPanels";
import type { ChantierCardData, DashboardStats } from "@/lib/chantiers/types";

export function DashboardPage({
  chantiers,
  stats,
  subtitle,
}: {
  chantiers: ChantierCardData[];
  stats: DashboardStats;
  subtitle: string;
}) {
  return (
    <>
      <DashboardHero stats={stats} subtitle={subtitle} />
      <main className="flex flex-1 gap-6 px-8 py-8">
        <ChantiersGrid chantiers={chantiers} />
        <RightPanels />
      </main>
    </>
  );
}
