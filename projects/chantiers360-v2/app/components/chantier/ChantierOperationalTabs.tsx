"use client";

import { useState } from "react";
import type { Reserve, Tache } from "@/lib/db/schema";
import { TasksSection } from "./TasksSection";
import { ReservesSection } from "./ReservesSection";

type TabId = "taches" | "reserves" | "jalons" | "comptes-rendus";

const tabs: { id: TabId; label: string; hint?: string; disabled?: boolean }[] = [
  { id: "taches", label: "Tâches" },
  { id: "reserves", label: "Réserves" },
  { id: "jalons", label: "Jalons", hint: "INC-03", disabled: true },
  { id: "comptes-rendus", label: "Comptes rendus", hint: "INC-04", disabled: true },
];

export function ChantierOperationalTabs({
  chantierId,
  taches,
  reserves,
}: {
  chantierId: string;
  taches: Tache[];
  reserves: Reserve[];
}) {
  const [activeTab, setActiveTab] = useState<TabId>("taches");

  return (
    <section className="mt-6">
      <div className="flex flex-wrap gap-2 border-b border-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            disabled={tab.disabled}
            onClick={() => !tab.disabled && setActiveTab(tab.id)}
            className={
              tab.disabled
                ? "cursor-not-allowed rounded-t-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-400"
                : activeTab === tab.id
                  ? "rounded-t-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-card"
                  : "rounded-t-lg px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50"
            }
            title={tab.disabled ? `${tab.hint} — hors périmètre INC-02` : undefined}
          >
            {tab.label}
            {tab.hint && <span className="ml-2 text-[10px] uppercase">{tab.hint}</span>}
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
      </div>
    </section>
  );
}
