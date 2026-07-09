import { DashboardHero } from "./DashboardHero";
import { ChantiersGrid } from "./ChantiersGrid";
import { RightPanels } from "./RightPanels";
import type { ChantierCardData, DashboardStats } from "@/lib/chantiers/types";
import type {
  DashboardDistributionItem,
  DashboardTodoItem,
} from "@/lib/dashboard/right-panels";

export function DashboardPage({
  chantiers,
  stats,
  subtitle,
  todoItems,
  distribution,
}: {
  chantiers: ChantierCardData[];
  stats: DashboardStats;
  subtitle: string;
  todoItems: DashboardTodoItem[];
  distribution: DashboardDistributionItem[];
}) {
  return (
    <>
      <DashboardHero stats={stats} subtitle={subtitle} />
      <main className="flex flex-1 gap-6 px-8 py-8">
        <ChantiersGrid chantiers={chantiers} />
        <RightPanels todoItems={todoItems} distribution={distribution} />
      </main>
    </>
  );
}
