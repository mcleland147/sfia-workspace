"use client";

import { useState } from "react";
import type { CompteRendu, Reserve, Tache } from "@/lib/db/schema";
import type { SimplePlanningData } from "@/lib/planning/types";
import { TasksSection } from "./TasksSection";
import { ReservesSection } from "./ReservesSection";
import { MilestonesSection } from "./MilestonesSection";
import { ComptesRendusSection } from "./ComptesRendusSection";

type TabId = "taches" | "reserves" | "jalons" | "comptes-rendus";

export type ChantierOperationalTabId = TabId;

const tabs: { id: TabId; label: string }[] = [
  { id: "taches", label: "Tâches" },
  { id: "reserves", label: "Réserves" },
  { id: "jalons", label: "Jalons" },
  { id: "comptes-rendus", label: "Comptes rendus" },
];

export function ChantierOperationalTabs({
  chantierId,
  taches,
  reserves,
  planning,
  comptesRendus,
  initialTab = "taches",
}: {
  chantierId: string;
  taches: Tache[];
  reserves: Reserve[];
  planning: SimplePlanningData;
  comptesRendus: CompteRendu[];
  initialTab?: TabId;
}) {
  const [activeTab, setActiveTab] = useState<TabId>(initialTab);

  return (
    <section className="mt-6">
      <div className="flex flex-wrap gap-2 border-b border-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={
              activeTab === tab.id
                ? "rounded-t-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-card"
                : "rounded-t-lg px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50"
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="rounded-b-2xl rounded-tr-2xl bg-white p-8 shadow-card">
        {activeTab === "taches" && (
          <TasksSection chantierId={chantierId} taches={taches} />
        )}
        {activeTab === "reserves" && (
          <ReservesSection chantierId={chantierId} reserves={reserves} />
        )}
        {activeTab === "jalons" && (
          <MilestonesSection chantierId={chantierId} planning={planning} />
        )}
        {activeTab === "comptes-rendus" && (
          <ComptesRendusSection chantierId={chantierId} comptesRendus={comptesRendus} />
        )}
      </div>
    </section>
  );
}
