import { Sidebar } from "./Sidebar";
import { DashboardHero } from "./DashboardHero";
import { ChantiersGrid } from "./ChantiersGrid";
import { RightPanels } from "./RightPanels";

export function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardHero />
        <main className="flex flex-1 gap-6 px-8 py-8">
          <ChantiersGrid />
          <RightPanels />
        </main>
      </div>
    </div>
  );
}
