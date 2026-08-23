/**
 * W2 Track A — server-side resolution of the qualification truth that feeds
 * Option/Recommendation derivation.
 *
 * Inputs come exclusively from durable state (Project/LPS, CycleInstance,
 * materialized EpistemicItems). The client never supplies them, so the option
 * set and the recommendation are reproducible for a given project state and a
 * hostile payload cannot reshape what is proposed or decided.
 *
 * Phase B: also surfaces doctrine pin fields from LPS for product-native CKC
 * load. No Proposal-store / F2 process-local dependency.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import type { Digest } from "@/lib/oa/doctrine/domain/types";
import type { TrajectoryOptionInputs } from "./trajectoryOptions";

export type ResolvedW2Qualification = {
  readonly inputs: TrajectoryOptionInputs;
  readonly activeCycleInstanceId: string;
  readonly lpsVersion: number;
  readonly objective: string;
  readonly projectTitle: string;
  readonly packagePin: DoctrinePackagePin;
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

  const packagePin: DoctrinePackagePin = Object.freeze({
    doctrinePackageId: live.context.doctrinePackageId,
    version: live.context.doctrineVersion,
    digest: live.context.doctrineDigest as Digest,
  });

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
      projectTitle: live.context.projectTitle,
      packagePin,
    },
  };
}
