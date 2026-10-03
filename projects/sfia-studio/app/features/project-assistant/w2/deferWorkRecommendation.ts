/**
 * CHAT-FIRST — durable defer of an OptionSet Work Recommendation via
 * HumanDecision + Reservation stamp + Proposal subject closure.
 *
 * Lifecycle Recommendations are NEVER disposed here — they stay on the
 * explicit Studio lifecycle surface. CURRENT NEXT_CYCLE is only consulted
 * as an honest defer *target* (cycle type), never as a chat-triggered START.
 */

import { randomUUID } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import {
  deriveLifecycleBlockersFromEpistemicItems,
  isWorkRecommendationItem,
  selectCurrentLifecycleRecommendations,
  workRecommendationOptionSetRef,
} from "@/lib/oa/cycle";
import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
import {
  resolveHonestReservationDeferTarget,
  type EpistemicReservationMetadata,
} from "@/lib/oa/cycle/domain/reservationSemantics";
import {
  isWorkRecommendationPresentedSet,
  type PresentedOptionSetBinding,
} from "./presentedOptionSet";
import {
  finalizeProposalSubjectAfterDurableClosure,
  writeProposalDecisionRef,
  writeWorkRecommendationDecisionRef,
} from "./closeProposalDecisionSubject";
import { disposeWorkRecommendationAfterDecision } from "./disposeWorkRecommendation";

export const WORK_RECOMMENDATION_DEFER_OPTION_ID =
  "opt:defer-work-recommendation" as const;

export function workRecommendationDeferSubjectFor(
  epistemicItemId: string,
): string {
  return `work-recommendation-defer:${epistemicItemId}`;
}

async function resolveDeferTargetCycleTypeId(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly activeCycleInstanceId: string | null;
}): Promise<
  | { readonly ok: true; readonly targetCycleTypeId: string; readonly targetLabel: string }
  | { readonly ok: false }
> {
  const { oa, projectId } = input;
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  const lpsActive = lps.ok
    ? (lps.livingProjectState.activeCycleInstanceId ?? null)
    : null;

  let items: Awaited<ReturnType<typeof oa.cycleServices.epistemic.listByProject>> =
    [];
  let cycles: Awaited<ReturnType<typeof oa.cycleServices.cycles.listByProject>> =
    [];
  let decisions: Awaited<
    ReturnType<typeof oa.decisionServices.decisions.listByProject>
  > = [];
  let evidence: Awaited<
    ReturnType<typeof oa.evidenceReviewServices.repository.listByProject>
  > = [];
  let trajectory: import("@/lib/oa/cycle/domain/types").ProjectTrajectory | null =
    null;
  const failed = new Set<LifecycleRecommendationMaterialDimension>();

  try {
    items = await oa.cycleServices.epistemic.listByProject(projectId);
  } catch {
    failed.add("epistemic_blockers");
  }
  try {
    cycles = await oa.cycleServices.cycles.listByProject(projectId);
  } catch {
    /* ignore — target resolution fail-closed below */
  }
  try {
    decisions = await oa.decisionServices.decisions.listByProject(projectId);
  } catch {
    failed.add("decisions");
  }
  try {
    evidence = await oa.evidenceReviewServices.repository.listByProject(
      projectId,
    );
  } catch {
    failed.add("evidence");
  }
  try {
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    trajectory = traj.ok ? traj.trajectory : null;
  } catch {
    failed.add("trajectory");
  }

  const projectResult = await oa.projectServices.getProject.execute({
    projectId,
  });
  const doctrinePin = projectResult.ok
    ? projectResult.project.doctrinePackageRef
    : lps.ok
      ? lps.livingProjectState.doctrinePackageRef
      : undefined;
  const blockersSnap = deriveLifecycleBlockersFromEpistemicItems(items);

  const current = selectCurrentLifecycleRecommendations({
    items,
    cycles,
    lpsActiveCycleInstanceId: lpsActive,
    lpsVersion: lps.ok ? lps.livingProjectState.version : null,
    doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
    doctrinePackageVersion: doctrinePin?.version ?? null,
    doctrinePackageDigest: doctrinePin?.digest ?? null,
    trajectory,
    decisions,
    evidence,
    blockingReservationStatements: blockersSnap.statements,
    failedMaterialDimensions: failed,
  });

  const next = current.find(
    (r) =>
      r.derivedCurrentness === "CURRENT" &&
      r.intent === "NEXT_CYCLE" &&
      (r.targetCycleTypeId?.trim()?.length ?? 0) > 0,
  );
  if (next?.targetCycleTypeId) {
    const id = next.targetCycleTypeId.trim();
    return { ok: true, targetCycleTypeId: id, targetLabel: id };
  }

  const activeCycle = input.activeCycleInstanceId
    ? cycles.find((c) => c.cycleInstanceId === input.activeCycleInstanceId)
    : null;
  const honest = resolveHonestReservationDeferTarget({
    trajectory,
    currentCycleTypeId: activeCycle?.cycleTypeId ?? null,
  });
  if (honest) {
    return {
      ok: true,
      targetCycleTypeId: honest.targetCycleTypeId,
      targetLabel: honest.targetLabel,
    };
  }
  return { ok: false };
}

export async function deferWorkRecommendation(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly presented: PresentedOptionSetBinding;
  readonly rationale?: string | null;
  readonly forceLocalAuthority?: boolean;
}): Promise<
  | {
      readonly ok: true;
      readonly decisionId: string;
      readonly reservationEpistemicItemId: string;
      readonly workRecommendationId: string;
      readonly targetCycleTypeId: string;
      readonly capturedAt: string;
    }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const optionSetRef = input.presented.optionSetRef;
  // MD-WR-03 — work_recommendation mode has no Proposal: skip proposal
  // closure; still HD + Reservation + dispose WR carrier AND ACW.
  const workMode = isWorkRecommendationPresentedSet(input.presented);
  const workAcwId = workMode
    ? (input.presented.workRecommendationEpistemicItemId ?? null)
    : null;
  const proposalId = input.presented.proposalId ?? null;
  if (!workMode && !proposalId) {
    return {
      ok: false,
      code: "PROPOSAL_ID_MISSING",
      message: "Sujet Proposal sans identifiant — report refusé.",
    };
  }

  let items: Awaited<
    ReturnType<typeof input.oa.cycleServices.epistemic.listByProject>
  > = [];
  try {
    items = await input.oa.cycleServices.epistemic.listByProject(
      input.projectId,
    );
  } catch {
    return {
      ok: false,
      code: "EPISTEMIC_READ_FAILED",
      message: "Lecture épistémique impossible — report refusé.",
    };
  }

  const workRec = items.find(
    (item) =>
      isWorkRecommendationItem(item) &&
      workRecommendationOptionSetRef(item) === optionSetRef &&
      item.status === "active",
  );
  if (!workRec?.epistemicItemId) {
    return {
      ok: false,
      code: "WORK_RECOMMENDATION_MISSING",
      message:
        "Recommandation de travail introuvable pour ce jeu d'options — report refusé.",
    };
  }

  const live = await input.oa.projectServices.getCurrentLivingProjectState.execute(
    { projectId: input.projectId },
  );
  const activeCycleInstanceId = live.ok
    ? (live.livingProjectState.activeCycleInstanceId ?? null)
    : null;
  if (!activeCycleInstanceId) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_MISSING",
      message: "Cycle actif requis pour reporter une recommandation de travail.",
    };
  }

  const target = await resolveDeferTargetCycleTypeId({
    oa: input.oa,
    projectId: input.projectId,
    activeCycleInstanceId,
  });
  if (!target.ok) {
    return {
      ok: false,
      code: "DEFER_TARGET_UNRESOLVED",
      message:
        "Aucune cible aval honnête (cycle suivant) — précisez quand reporter ou poursuivez une autre disposition.",
    };
  }

  const nowIso = input.oa.clock.nowIso();
  const scope = `pilot-lifecycle:${activeCycleInstanceId}`;
  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.oa.authorityResolver,
    scope,
    issuedAt: nowIso,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const decisionId = `dec:work-rec-defer:${randomUUID()}`;
  const rationale =
    input.rationale?.trim() ||
    `Report explicite de la recommandation de travail vers ${target.targetLabel}.`;
  const reservationEpistemicItemId = `epi:work-defer:${randomUUID().slice(0, 12)}`;

  try {
    await input.oa.projectServices.store.runInTransaction(async () => {
      const recorded = await input.oa.decisionServices.recordHumanDecision.execute(
        {
          decisionId,
          projectId: input.projectId,
          cycleInstanceId: activeCycleInstanceId,
          subject: workRecommendationDeferSubjectFor(workRec.epistemicItemId!),
          options: [
            {
              optionId: WORK_RECOMMENDATION_DEFER_OPTION_ID,
              label: "Reporter la recommandation de travail",
            },
            { optionId: "opt:refuse", label: "Annuler" },
          ],
          selectedOptionId: WORK_RECOMMENDATION_DEFER_OPTION_ID,
          actor: LOCAL_PILOTE_ACTOR,
          authority: "pilot",
          status: "accepted",
          reversible: false,
          scope,
          authorityEvidenceId: authority.evidenceId,
          rationale,
          evidenceRefs: [
            workRec.epistemicItemId!,
            ...(workAcwId ? [workAcwId] : []),
            optionSetRef,
            target.targetCycleTypeId,
          ],
          supersedeExistingAccepted: true,
        },
      );
      if (!recorded.ok) {
        throw Object.assign(new Error(recorded.error.message), {
          detailCode: recorded.error.detailCode,
        });
      }

      const reservationMeta: EpistemicReservationMetadata = {
        ordinal: 1,
        title: "Report recommandation de travail",
        summary: rationale,
        impact: "minor",
        attentionBy: "before_finalization",
        finalizationRelevance: "may_affect",
        rationale,
        resolutionCondition: `Traiter lors du cycle ${target.targetLabel}.`,
        journalEntryRefs: [],
        sourceTurnRefs: [],
        deferred: {
          deferredAt: nowIso,
          humanDecisionId: decisionId,
          targetCycleTypeId: target.targetCycleTypeId,
          rationale,
        },
      };

      const reservationWrite =
        await input.oa.cycleServices.updateEpistemicState.execute({
          projectId: input.projectId,
          createdBy: LOCAL_PILOTE_ACTOR,
          items: [
            {
              epistemicItemId: reservationEpistemicItemId,
              type: "Reservation",
              statement: rationale,
              status: "active",
              source: "work-recommendation-defer",
              blocking: false,
              relatedObjects: [
                input.projectId,
                activeCycleInstanceId,
                workRec.epistemicItemId!,
                ...(workAcwId ? [workAcwId] : []),
                optionSetRef,
                decisionId,
              ],
              reservation: reservationMeta,
            },
          ],
        });
      if (!reservationWrite.ok) {
        throw Object.assign(new Error(reservationWrite.error.message), {
          detailCode: reservationWrite.error.detailCode,
        });
      }

      const disposed = await disposeWorkRecommendationAfterDecision({
        oa: input.oa,
        projectId: input.projectId,
        optionSetRef,
        decisionId,
        disposition: "defer",
        deferTargetCycleTypeId: target.targetCycleTypeId,
        workRecommendationEpistemicItemId: workAcwId,
      });
      if (!disposed.ok) {
        throw Object.assign(new Error(disposed.message), {
          detailCode: disposed.code,
        });
      }

      const closure = workMode
        ? await writeWorkRecommendationDecisionRef({
            oa: input.oa,
            projectId: input.projectId,
            decisionId,
            workRecommendationEpistemicItemId: workAcwId!,
            selectedOptionRef: WORK_RECOMMENDATION_DEFER_OPTION_ID,
            optionSetRef,
            epistemicRefs: input.presented.epistemicRefs,
            statement: `Décision reportée (defer) — ${decisionId} — recommandation de travail ${workAcwId}.`,
            correlationId: `w2-decref-defer:${optionSetRef}`,
          })
        : await writeProposalDecisionRef({
            oa: input.oa,
            projectId: input.projectId,
            decisionId,
            proposalId: proposalId!,
            selectedOptionRef: WORK_RECOMMENDATION_DEFER_OPTION_ID,
            optionSetRef,
            epistemicRefs: input.presented.epistemicRefs,
            markerReason: "decided",
            nextProposalStatus: "APPROVED_WITH_RESERVES",
            statement: `Décision reportée (defer) — ${decisionId} — sujet ${proposalId}.`,
            correlationId: `w2-decref-defer:${optionSetRef}`,
          });
      if (!closure.ok) {
        throw Object.assign(new Error(closure.message), {
          detailCode: closure.code,
        });
      }
    });
  } catch (err) {
    const code =
      err &&
      typeof err === "object" &&
      "detailCode" in err &&
      typeof (err as { detailCode: unknown }).detailCode === "string"
        ? (err as { detailCode: string }).detailCode
        : "PERSISTENCE_FAILURE";
    return {
      ok: false,
      code,
      message:
        err instanceof Error
          ? err.message
          : "Report de recommandation de travail impossible.",
    };
  }

  if (!workMode && proposalId) {
    await finalizeProposalSubjectAfterDurableClosure({
      oa: input.oa,
      projectId: input.projectId,
      proposalId,
      markerReason: "decided",
      nextProposalStatus: "APPROVED_WITH_RESERVES",
      correlationId: `cor:pending-defer:${proposalId}`,
    });
  }

  return {
    ok: true,
    decisionId,
    reservationEpistemicItemId,
    workRecommendationId: workRec.epistemicItemId,
    targetCycleTypeId: target.targetCycleTypeId,
    capturedAt: nowIso,
  };
}
