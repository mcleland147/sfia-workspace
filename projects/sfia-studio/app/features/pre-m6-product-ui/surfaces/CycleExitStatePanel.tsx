/**
 * Minimal CycleExitState projection for Pilot/Nora inspection (D-GCEC-12/20).
 * Renders dynamic requirements — never hardcodes a full Git lifecycle list.
 */
"use client";

import type { CycleExitState } from "@/lib/oa/cycle";

export type CycleExitStatePanelProps = {
  state: CycleExitState | null | undefined;
  title?: string;
};

export function CycleExitStatePanel({
  state,
  title = "Cycle exit requirements",
}: CycleExitStatePanelProps) {
  if (!state) {
    return (
      <section aria-label={title} data-testid="cycle-exit-state-empty">
        <h3>{title}</h3>
        <p>No exit-state projection yet.</p>
      </section>
    );
  }

  return (
    <section aria-label={title} data-testid="cycle-exit-state">
      <h3>{title}</h3>
      <p data-testid="cycle-exit-all-verified">
        {state.allRequiredVerified
          ? "All required exit conditions verified."
          : "Exit conditions incomplete."}
      </p>
      <ul>
        {state.requirements.map((r) => (
          <li key={r.kind} data-testid={`cycle-exit-${r.kind}`}>
            <span>{r.kind}</span>
            <span> — </span>
            <strong>{r.status}</strong>
            {r.blocker ? <span> ({r.blocker})</span> : null}
          </li>
        ))}
      </ul>
      {state.blockers.length > 0 ? (
        <p data-testid="cycle-exit-blockers">
          Blockers: {state.blockers.join("; ")}
        </p>
      ) : null}
    </section>
  );
}
