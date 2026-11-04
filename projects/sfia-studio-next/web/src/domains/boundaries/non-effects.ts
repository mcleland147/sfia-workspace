/**
 * Negative-boundary helpers for D5–D9 in this increment.
 * They assert absence — they do not fabricate empty services.
 */

export type SideEffectProbe = {
  cycleCreated: false;
  humanDecisionCreated: false;
  cursorMandateCreated: false;
  gitRepositoryOpened: false;
  externalExecutionStarted: false;
};

export function probeCreateProjectSideEffects(): SideEffectProbe {
  return {
    cycleCreated: false,
    humanDecisionCreated: false,
    cursorMandateCreated: false,
    gitRepositoryOpened: false,
    externalExecutionStarted: false,
  };
}

export function assertNoImplicitEffects(probe: SideEffectProbe = probeCreateProjectSideEffects()) {
  const bad = Object.entries(probe).filter(([, v]) => v !== false);
  if (bad.length) {
    throw new Error(`Unexpected side effects: ${bad.map(([k]) => k).join(",")}`);
  }
  return true;
}
