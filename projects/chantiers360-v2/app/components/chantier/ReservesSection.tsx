import type { Reserve } from "@/lib/db/schema";
import { AddReserveForm } from "./AddReserveForm";
import { ReserveStatusSelector } from "./ReserveStatusSelector";

export function ReservesSection({
  chantierId,
  reserves,
}: {
  chantierId: string;
  reserves: Reserve[];
}) {
  return (
    <section aria-labelledby="reserves-heading" className="space-y-4">
      <h2 id="reserves-heading" className="text-sm font-semibold text-slate-900">
        Réserves
      </h2>
      <AddReserveForm chantierId={chantierId} />
      {reserves.length === 0 ? (
        <p className="text-sm text-slate-500">Aucune réserve pour ce chantier.</p>
      ) : (
        <ul className="space-y-3">
          {reserves.map((reserve) => (
            <li
              key={`${reserve.id}-${reserve.status}`}
              className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
            >
              <ReserveStatusSelector chantierId={chantierId} reserve={reserve} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
