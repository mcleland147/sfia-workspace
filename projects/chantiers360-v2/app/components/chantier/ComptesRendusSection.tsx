import type { CompteRendu } from "@/lib/db/schema";
import { formatCompteRenduDate } from "@/lib/comptes-rendus/format";
import { AddCompteRenduForm } from "./AddCompteRenduForm";

export function ComptesRendusSection({
  chantierId,
  comptesRendus,
}: {
  chantierId: string;
  comptesRendus: CompteRendu[];
}) {
  return (
    <section aria-labelledby="comptes-rendus-heading" className="space-y-4">
      <h2 id="comptes-rendus-heading" className="text-sm font-semibold text-slate-900">
        Comptes rendus
      </h2>
      <AddCompteRenduForm chantierId={chantierId} />
      {comptesRendus.length === 0 ? (
        <p className="text-sm text-slate-500">Aucun compte rendu pour ce chantier.</p>
      ) : (
        <ul className="space-y-3" aria-label="Historique des comptes rendus">
          {comptesRendus.map((compteRendu) => (
            <li
              key={compteRendu.id}
              className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
            >
              <time
                dateTime={compteRendu.createdAt.toISOString()}
                className="text-xs font-semibold uppercase tracking-wide text-slate-400"
              >
                {formatCompteRenduDate(compteRendu.createdAt)}
              </time>
              <p className="mt-2 whitespace-pre-wrap text-sm text-slate-800">{compteRendu.contenu}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
