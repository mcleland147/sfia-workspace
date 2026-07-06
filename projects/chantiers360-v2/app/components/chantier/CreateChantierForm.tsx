"use client";

import { useActionState } from "react";
import { createChantierAction } from "@/lib/chantiers/actions";

const inputClass =
  "mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none ring-accent-purple/20 focus:border-accent-purple focus:ring-2";

export function CreateChantierForm() {
  const [state, formAction, pending] = useActionState(createChantierAction, {});

  return (
    <form action={formAction} className="mx-auto max-w-2xl space-y-6">
      {state.error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-100">
          {state.error}
        </p>
      )}

      <div>
        <label htmlFor="title" className="text-sm font-medium text-slate-700">
          Libellé chantier <span className="text-red-500">*</span>
        </label>
        <input id="title" name="title" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="client" className="text-sm font-medium text-slate-700">
          Client <span className="text-red-500">*</span>
        </label>
        <input id="client" name="client" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="address" className="text-sm font-medium text-slate-700">
          Adresse <span className="text-red-500">*</span>
        </label>
        <input id="address" name="address" required className={inputClass} />
      </div>

      <fieldset className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5">
        <legend className="px-1 text-sm font-semibold text-slate-700">
          Planning simple (optionnel)
        </legend>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="plannedStartDate" className="text-sm text-slate-600">
              Début prévu
            </label>
            <input id="plannedStartDate" name="plannedStartDate" type="date" className={inputClass} />
          </div>
          <div>
            <label htmlFor="plannedEndDate" className="text-sm text-slate-600">
              Fin prévue
            </label>
            <input id="plannedEndDate" name="plannedEndDate" type="date" className={inputClass} />
          </div>
          <div>
            <label htmlFor="nextInterventionDate" className="text-sm text-slate-600">
              Prochaine intervention
            </label>
            <input
              id="nextInterventionDate"
              name="nextInterventionDate"
              type="date"
              className={inputClass}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="simplePlanningComment" className="text-sm text-slate-600">
              Commentaire planning
            </label>
            <textarea
              id="simplePlanningComment"
              name="simplePlanningComment"
              rows={2}
              className={inputClass}
            />
          </div>
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-navy/90 disabled:opacity-60"
      >
        {pending ? "Création…" : "Créer le chantier"}
      </button>
    </form>
  );
}
