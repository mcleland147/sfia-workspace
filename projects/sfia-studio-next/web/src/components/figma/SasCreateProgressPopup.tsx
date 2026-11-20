"use client";

import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";

export function SasCreateProgressPopup(props: {
  visible: boolean;
  projectName: string;
  step: 1 | 2 | 3;
  qualification: InitialQualificationProjection | null;
  onDismiss: () => void;
}) {
  if (!props.visible) return null;

  const labels = [
    {
      title: "Projet créé",
      detail: "Il reste accessible, même si vous quittez Studio.",
    },
    {
      title: "Identification des cycles pertinents",
      detail: "Analyse des cycles pertinents et des références CKI.",
    },
    {
      title: "Proposition ou clarification",
      detail: "Nora restituera la trajectoire dans le fil Travail.",
    },
  ] as const;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sas-create-progress-title"
      data-testid="sas-create-progress-popup"
    >
      <div
        className="w-full max-w-md rounded-xl border px-5 py-4 shadow-lg"
        style={{ background: "#0f1118", borderColor: "#7477ed44", color: "#f3f5ff" }}
      >
        <p className="text-[10px] uppercase tracking-widest text-[#7477ed]">
          PROJET CRÉÉ / TRAJECTOIRE EN PRÉPARATION
        </p>
        <h2 id="sas-create-progress-title" className="text-lg font-medium mt-1">
          Projet créé. Nora prépare la suite.
        </h2>
        <ol className="mt-4 space-y-3">
          {labels.map((item, idx) => {
            const n = (idx + 1) as 1 | 2 | 3;
            const done = props.step > n;
            const current = props.step === n;
            return (
              <li
                key={item.title}
                className="flex gap-3 text-sm"
                data-testid={`sas-create-step-${n}`}
                data-current={current ? "1" : "0"}
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                  style={{
                    background: done || current ? "#7477ed" : "#a3b0c733",
                    color: done || current ? "#f3f5ff" : "#a3b0c7",
                  }}
                  aria-hidden
                >
                  {done ? "OK" : n}
                </span>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-[#a3b0c7]">{item.detail}</p>
                </div>
              </li>
            );
          })}
        </ol>
        {props.qualification?.composerLockReason ? (
          <p className="mt-3 text-xs text-[#a3b0c7]">{props.qualification.composerLockReason}</p>
        ) : null}
        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            className="btn secondary"
            onClick={props.onDismiss}
            data-testid="sas-create-progress-dismiss"
          >
            Accéder au projet
          </button>
        </div>
      </div>
    </div>
  );
}