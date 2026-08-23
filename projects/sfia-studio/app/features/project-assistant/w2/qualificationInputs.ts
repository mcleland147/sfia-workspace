/**
 * W2 Track A — server-side resolution of the qualification truth that feeds
 * Option/Recommendation derivation.
 *
 * Inputs come exclusively from durable state (Project/LPS, CycleInstance,
 * materialized EpistemicItems). The client never supplies them, so the option
 * set and the recommendation are reproducible for a given project state and a
 * hostile payload cannot reshape what is proposed or decided.
 *
 * This reads the W1 CKC attribution already carried by the LPS. It performs no
 * cognition and is not a Phase B integration point.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
import type { TrajectoryOptionInputs } from "./trajectoryOptions";

export type ResolvedW2Qualification = {
  readonly inputs: TrajectoryOptionInputs;
  readonly activeCycleInstanceId: string;
  readonly lpsVersion: number;
  readonly objective: string;
};

const MAX_REPORTED_RESERVATIONS = 5;

export async function resolveW2QualificationInputs(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<
  | { readonly ok: true; readonly qualification: ResolvedW2Qualification }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const { oa } = input;
  const live = await readLiveProjectContext(oa, input.projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }
  const cycleInstanceId = live.context.activeCycleInstanceId;
  if (!cycleInstanceId) {
    return {
      ok: false,
      code: "CYCLE_NOT_QUALIFIED",
      message:
        "Aucun cycle qualifié n'est actif — la qualification doit précéder les options.",
    };
  }

  const cycle = await oa.cycleServices.getCycle.execute({
    cycleInstanceId,
  });
  if (!cycle.ok) {
    return {
      ok: false,
      code: cycle.error.detailCode,
      message: "Cycle qualifié introuvable — options impossibles à instruire.",
    };
  }

  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId: input.projectId,
  });
  const reservations = epistemic.ok
    ? epistemic.state.items
        .filter(
          (item) => item.type === "Reservation" && item.status === "active",
        )
        .map((item) => item.statement)
        .slice(0, MAX_REPORTED_RESERVATIONS)
    : [];
  const blockingReservation = epistemic.ok
    ? epistemic.state.items.some(
        (item) =>
          item.type === "Reservation" &&
          item.status === "active" &&
          item.blocking === true,
      )
    : false;

  return {
    ok: true,
    qualification: {
      inputs: {
        cycleTypeId: cycle.cycle.cycleTypeId,
        recommendedProfile: cycle.cycle.profile,
        criticalSignalsPresent: cycle.cycle.profile === "Critical",
        irreversible: blockingReservation,
        reservations,
        ckcAttribution: live.context.ckcResolutionRef,
      },
      activeCycleInstanceId: cycleInstanceId,
      lpsVersion: live.context.lpsVersion,
      objective: live.context.objective,
    },
  };
}
