"use client";

import { useActionState } from "react";
import type { SimplePlanningData } from "@/lib/planning/types";
import { updateSimplePlanningAction } from "@/lib/planning/actions";
import { toDateInputValue } from "@/lib/planning/format";

const inputClass =
  "mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none ring-accent-purple/20 focus:border-accent-purple focus:ring-2";

export function MilestonesSection({
  chantierId,
  planning,
}: {
  chantierId: string;
  planning: SimplePlanningData;
}) {
  const boundAction = updateSimplePlanningAction.bind(null, chantierId);
  const [state, formAction, pending] = useActionState(boundAction, {});

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-sm font-semibold text-slate-900">Jalons simples</h2>
        <p className="mt-1 text-sm text-slate-500">
          Planning léger — tous les champs sont optionnels. Pas de calendrier avancé.
        </p>
      </div>

      <form action={formAction} className="space-y-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="plannedStartDate" className="text-sm font-medium text-slate-700">
              Date de début prévue
            </label>
            <input
              id="plannedStartDate"
              name="plannedStartDate"
              type="date"
              defaultValue={toDateInputValue(planning.plannedStartDate)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="plannedEndDate" className="text-sm font-medium text-slate-700">
              Date de fin prévue
            </label>
            <input
              id="plannedEndDate"
              name="plannedEndDate"
              type="date"
              defaultValue={toDateInputValue(planning.plannedEndDate)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="nextInterventionDate" className="text-sm font-medium text-slate-700">
              Prochaine intervention
            </label>
            <input
              id="nextInterventionDate"
              name="nextInterventionDate"
              type="date"
              defaultValue={toDateInputValue(planning.nextInterventionDate)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="upcomingMilestone" className="text-sm font-medium text-slate-700">
              Jalon à venir
            </label>
            <input
              id="upcomingMilestone"
              name="upcomingMilestone"
              type="text"
              defaultValue={planning.upcomingMilestone ?? ""}
              placeholder="Ex. Livraison cuisine"
              className={inputClass}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="simplePlanningComment" className="text-sm font-medium text-slate-700">
              Commentaire planning simple
            </label>
            <textarea
              id="simplePlanningComment"
              name="simplePlanningComment"
              rows={3}
              defaultValue={planning.simplePlanningComment ?? ""}
              placeholder="Notes planning optionnelles"
              className={inputClass}
            />
          </div>
        </div>

        {state.error && <p className="text-sm text-red-600">{state.error}</p>}

        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 disabled:opacity-60"
        >
          {pending ? "Enregistrement…" : "Enregistrer les jalons"}
        </button>
      </form>
    </div>
  );
}
