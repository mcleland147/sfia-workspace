/**
 * M5-B W1 — factual LPS append of evidenceIds / reviewBundleIds after
 * successful Evidence ingest + ReviewBundle create.
 * Recommendation remains Recommendation (not Decision / not gate consume).
 */

import type { ProjectServices } from "@/lib/oa/project";
import { SFIA_STUDIO_SYSTEM_FACTUAL_WRITER } from "./systemFactualWriter";

export type AppendEvidenceOutcomeToLpsResult =
  | { ok: true; lpsVersion: number }
  | { ok: false; code: string; message: string };

export async function appendEvidenceOutcomeToLps(input: {
  projectId: string;
  evidenceId: string;
  reviewBundleId: string;
  projectServices: Pick<
    ProjectServices,
    "appendLivingProjectStateVersion" | "getCurrentLivingProjectState"
  >;
}): Promise<AppendEvidenceOutcomeToLpsResult> {
  const current =
    await input.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
  if (!current.ok) {
    return {
      ok: false,
      code: current.error.detailCode,
      message: current.error.message,
    };
  }

  const lps = current.livingProjectState;
  const evidenceIds = [
    ...new Set([...(lps.evidenceIds ?? []), input.evidenceId]),
  ];
  const reviewBundleIds = [
    ...new Set([...(lps.reviewBundleIds ?? []), input.reviewBundleId]),
  ];

  const appended =
    await input.projectServices.appendLivingProjectStateVersion.execute({
      projectId: input.projectId,
      expectedVersion: lps.version,
      objective: lps.objective,
      context: lps.context,
      scope: lps.scope,
      // Automatic factual write-back — system actor, not Morris demo authority.
      createdBy: SFIA_STUDIO_SYSTEM_FACTUAL_WRITER,
      evidenceIds,
      reviewBundleIds,
    });

  if (!appended.ok) {
    return {
      ok: false,
      code: appended.error.detailCode,
      message: appended.error.message,
    };
  }

  return { ok: true, lpsVersion: appended.livingProjectState.version };
}
