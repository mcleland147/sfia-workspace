"use client";

import { useActionState, useEffect, useState } from "react";
import { updateTacheStatusFormAction } from "@/lib/taches/actions";
import { TACHE_STATUSES } from "@/lib/taches/types";
import type { TacheStatus } from "@/lib/taches/types";
import type { Tache } from "@/lib/db/schema";

export function TaskStatusSelector({
  chantierId,
  tache,
}: {
  chantierId: string;
  tache: Tache;
}) {
  const [state, formAction, pending] = useActionState(updateTacheStatusFormAction, {});
  const currentStatus = tache.status as TacheStatus;
  const [selectedStatus, setSelectedStatus] = useState<TacheStatus>(currentStatus);

  useEffect(() => {
    setSelectedStatus(tache.status as TacheStatus);
  }, [tache.id]);

  return (
    <form action={formAction} className="flex flex-wrap items-center gap-3">
      <input type="hidden" name="chantierId" value={chantierId} />
      <input type="hidden" name="tacheId" value={tache.id} />
      <span className="flex-1 text-sm font-medium text-slate-800">{tache.label}</span>
      <select
        name="status"
        value={selectedStatus}
        onChange={(event) => setSelectedStatus(event.target.value as TacheStatus)}
        aria-label={`Statut de la tâche ${tache.label}`}
        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20"
      >
        {TACHE_STATUSES.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      <button
        type="submit"
        disabled={pending}
        className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60"
      >
        {pending ? "…" : "Mettre à jour la tâche"}
      </button>
      {state.error && <p className="w-full text-sm text-red-600">{state.error}</p>}
    </form>
  );
}
