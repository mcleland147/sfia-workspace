"use client";

import { useState } from "react";
import type { ChantierCardData } from "@/lib/chantiers/types";
import { ChantierCard } from "./ChantierCard";

const filters = ["Tous", "En cours", "En retard"] as const;

export function ChantiersGrid({ chantiers }: { chantiers: ChantierCardData[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Tous");

  const filtered = chantiers.filter((c) => {
    if (activeFilter === "En cours") return c.statut === "En cours";
    if (activeFilter === "En retard") return c.statut === "En retard";
    return true;
  });

  return (
    <section className="flex-1">
      <div className="mb-5 flex items-center gap-3">
        <h2 className="text-lg font-bold text-slate-900">Mes chantiers</h2>
        <span className="rounded-full bg-slate-200/80 px-2.5 py-0.5 text-xs font-medium text-slate-600">
          {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
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

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center">
          <p className="text-sm text-slate-500">Aucun chantier pour ce filtre.</p>
          <p className="mt-1 text-xs text-slate-400">
            Créez un chantier pour commencer le suivi INC-01.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {filtered.map((chantier) => (
            <ChantierCard key={chantier.id} href={`/chantiers/${chantier.id}`} {...chantier} />
          ))}
        </div>
      )}
    </section>
  );
}
