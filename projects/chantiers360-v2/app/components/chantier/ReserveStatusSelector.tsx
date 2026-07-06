"use client";

import { useActionState, useEffect, useState } from "react";
import { updateReserveStatusFormAction } from "@/lib/reserves/actions";
import { RESERVE_STATUSES } from "@/lib/reserves/types";
import type { ReserveStatus } from "@/lib/reserves/types";
import type { Reserve } from "@/lib/db/schema";

export function ReserveStatusSelector({
  chantierId,
  reserve,
}: {
  chantierId: string;
  reserve: Reserve;
}) {
  const [state, formAction, pending] = useActionState(updateReserveStatusFormAction, {});
  const currentStatus = reserve.status as ReserveStatus;
  const [selectedStatus, setSelectedStatus] = useState<ReserveStatus>(currentStatus);

  useEffect(() => {
    setSelectedStatus(reserve.status as ReserveStatus);
  }, [reserve.id]);

  return (
    <form action={formAction} className="space-y-3">
      <input type="hidden" name="chantierId" value={chantierId} />
      <input type="hidden" name="reserveId" value={reserve.id} />
      <p className="text-sm text-slate-800">{reserve.description}</p>
      <div className="flex flex-wrap items-center gap-3">
        <select
          name="status"
          value={selectedStatus}
          onChange={(event) => setSelectedStatus(event.target.value as ReserveStatus)}
          aria-label={`Statut de la réserve ${reserve.description}`}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20"
        >
          {RESERVE_STATUSES.map((status) => (
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
          {pending ? "…" : "Mettre à jour la réserve"}
        </button>
      </div>
      {state.error && <p className="text-sm text-red-600">{state.error}</p>}
    </form>
  );
}
