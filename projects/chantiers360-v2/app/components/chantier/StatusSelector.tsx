"use client";

import { useActionState } from "react";
import { updateChantierStatusAction } from "@/lib/chantiers/actions";
import { CHANTIER_STATUSES } from "@/lib/chantiers/types";
import type { ChantierStatus } from "@/lib/chantiers/types";

export function StatusSelector({
  chantierId,
  currentStatus,
}: {
  chantierId: string;
  currentStatus: ChantierStatus;
}) {
  const boundAction = updateChantierStatusAction.bind(null, chantierId);
  const [state, formAction, pending] = useActionState(boundAction, {});

  return (
    <form action={formAction} className="space-y-3">
      <label htmlFor="status" className="text-sm font-medium text-slate-700">
        Statut du chantier
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <select
          id="status"
          name="status"
          defaultValue={currentStatus}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20"
        >
          {CHANTIER_STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-navy/90 disabled:opacity-60"
        >
          {pending ? "Mise à jour…" : "Mettre à jour"}
        </button>
      </div>
      {state.error && <p className="text-sm text-red-600">{state.error}</p>}
    </form>
  );
}
