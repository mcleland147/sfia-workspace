"use client";

import { useState } from "react";
import { chantiers } from "@/data/mockChantiers";
import { ChantierCard } from "./ChantierCard";

const filters = ["Tous", "En cours", "En retard"] as const;

export function ChantiersGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Tous");

  const filtered = chantiers.filter((c) => {
    if (activeFilter === "En cours") return c.statut === "En cours";
    if (activeFilter === "En retard") return c.retardDays !== undefined;
    return true;
  });

  return (
    <section className="flex-1">
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-lg font-bold text-slate-900">Mes chantiers</h2>
        <span className="rounded-full bg-slate-200/80 px-2.5 py-0.5 text-xs font-medium text-slate-600">
          {filtered.length} résultats
        </span>
      </div>

      <div className="mb-5 flex gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "bg-navy text-white"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filtered.map((chantier) => (
          <ChantierCard key={chantier.id} {...chantier} />
        ))}
      </div>
    </section>
  );
}
