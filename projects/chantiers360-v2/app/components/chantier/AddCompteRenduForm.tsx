"use client";

import { useActionState } from "react";
import { createCompteRenduAction } from "@/lib/comptes-rendus/actions";

export function AddCompteRenduForm({ chantierId }: { chantierId: string }) {
  const boundAction = createCompteRenduAction.bind(null, chantierId);
  const [state, formAction, pending] = useActionState(boundAction, {});

  return (
    <form action={formAction} className="space-y-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
      <label htmlFor="compte-rendu-contenu" className="text-sm font-medium text-slate-700">
        Rédiger un compte rendu
      </label>
      <div className="flex flex-wrap items-start gap-3">
        <textarea
          id="compte-rendu-contenu"
          name="contenu"
          required
          rows={4}
          placeholder="Décrivez ce qui s'est passé sur le chantier"
          className="min-w-[240px] flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 disabled:opacity-60"
        >
          {pending ? "Enregistrement…" : "Enregistrer"}
        </button>
      </div>
      {state.error && <p className="text-sm text-red-600">{state.error}</p>}
    </form>
  );
}
