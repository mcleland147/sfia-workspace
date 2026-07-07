import Link from "next/link";
import { formatDisplayDate } from "@/lib/planning/format";
import {
  buildChantierSectionHref,
  getSourceTypeLabel,
} from "@/lib/prochaines-actions/format";
import type { ProchaineActionItem } from "@/lib/prochaines-actions/types";

export function ProchainesActionsList({ items }: { items: ProchaineActionItem[] }) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-slate-600">
        Aucune action dérivée pour le moment — les tâches ouvertes, réserves, jalons et
        retards apparaîtront ici automatiquement.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-slate-100" aria-label="Liste des prochaines actions">
      {items.map((item) => (
        <li key={item.id} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {getSourceTypeLabel(item.sourceType)} · {item.chantierTitle}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-900">{item.label}</p>
            <p className="mt-1 text-xs text-slate-500">
              Statut : {item.statusLabel}
              {item.dueDate ? ` · ${formatDisplayDate(item.dueDate)}` : ""}
            </p>
          </div>
          <Link
            href={buildChantierSectionHref(item.chantierId, item.targetTab)}
            className="inline-flex shrink-0 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            aria-label={`Ouvrir ${item.chantierTitle} — ${item.label}`}
          >
            Voir sur le chantier
          </Link>
        </li>
      ))}
    </ul>
  );
}
