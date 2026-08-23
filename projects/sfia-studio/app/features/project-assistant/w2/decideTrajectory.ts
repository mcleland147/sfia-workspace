/**
 * W2 Track A — product application path enforcement of D-W2-03.
 *
 * A structuring ProjectTrajectory becomes decided/current ONLY through this
 * path, and only after a valid accepted HumanDecision taken by the Pilote.
 * A Recommendation can never reach the promotion call: promotion consumes a
 * decisionId, verifies the durable decision, and refuses everything else.
 *
 * Reuses existing OA use cases (RecordHumanDecision, PromoteDecidedTrajectory,
 * UpdateEpistemicState). OCC/CAS and LPS invariants stay owned by OA.
 *
 * A4/U3: recordHumanDecision + promoteDecidedTrajectory run in one outer
 * Product UoW so an accepted HD cannot commit without a decided trajectory.
 */

import { randomBytes, randomUUID } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
import type { DecisionBasis, HumanDecision } from "@/lib/oa/decision";
import {
  computeDecisionBasisSourceDigest,
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { TrajectoryStep } from "@/lib/oa/cycle";
import {
  computeOptionSetDigest,
  computeQualificationDigest,
  loadPresentedOptionSet,
} from "./presentedOptionSet";
import { resolveW2QualificationInputs } from "./qualificationInputs";
import type { DecideTrajectoryResult, TrajectoryOptionDto } from "./types";

function shortId(): string {
  return randomBytes(6).toString("hex");
}

export function trajectoryDecisionScope(optionSetRef: string): string {
  return `w2-trajectory-decision:${optionSetRef}`;
}

export type PromotionGuardResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string };

/**
 * The single gate that lets a trajectory become decided/current.
 * Fail-closed on every mismatch — no synthetic decision can pass it.
 */
export function assertDecisionAuthorizesPromotion(input: {
  readonly decision: HumanDecision | null;
  readonly projectId: string;
  readonly trajectoryId: string;
  readonly candidateVersion: number;
  readonly selectedOptionRef: string;
}): PromotionGuardResult {
  const { decision } = input;
  if (!decision) {
    return {
      ok: false,
      code: "DECISION_REQUIRED",
      message:
        "Aucune décision humaine durable — la trajectoire ne peut pas devenir décidée/courante.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "DECISION_NOT_ACCEPTED",
      message: `Décision humaine au statut ${decision.status} — promotion refusée.`,
    };
  }
  if (decision.authority !== "morris") {
    return {
      ok: false,
      code: "AUTHORITY_DENIED",
      message:
        "Décision non structurante — seule une décision d'autorité structurante peut promouvoir une trajectoire.",
    };
  }
  if (decision.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "La décision n'appartient pas à ce projet.",
    };
  }
  const basis = decision.decisionBasis;
  const trajectoryContext = basis?.trajectoryContext;
  if (!basis || basis.sourceType !== "trajectory_option" || !trajectoryContext) {
    return {
      ok: false,
      code: "DECISION_BASIS_MISSING",
      message:
        "Décision sans base de décision trajectoire — impossible de rattacher la promotion.",
    };
  }
  if (
    trajectoryContext.trajectoryId !== input.trajectoryId ||
    trajectoryContext.candidateVersion !== input.candidateVersion
  ) {
    return {
      ok: false,
      code: "DECISION_TRAJECTORY_MISMATCH",
      message:
        "La décision ne porte pas sur la version de trajectoire proposée — réinstruction requise.",
    };
  }
  if (trajectoryContext.selectedOptionRef !== input.selectedOptionRef) {
    return {
      ok: false,
      code: "DECISION_OPTION_MISMATCH",
      message: "L'option décidée ne correspond pas à la demande de promotion.",
    };
  }
  if (!trajectoryContext.optionRefs.includes(input.selectedOptionRef)) {
    return {
      ok: false,
      code: "OPTION_NOT_PRESENTED",
      message: "L'option décidée ne faisait pas partie des options présentées.",
    };
  }
  return { ok: true };
}

export type DecideTrajectoryInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly optionSetRef: string;
  /** Optional hint — decide always reloads the durable presented set (A2). */
  readonly options?: readonly TrajectoryOptionDto[];
  readonly recommendedOptionRef?: string;
  readonly selectedOptionRef: string;
  readonly trajectoryId: string;
  readonly candidateVersion: number;
  readonly epistemicRefs?: readonly string[];
  readonly reservesText?: string | null;
  /** Hostile client fields — never trusted. */
  readonly canActAsMorris?: unknown;
  readonly claimedAuthorityLevel?: unknown;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
};

type AtomicDecideOutcome = {
  readonly decisionId: string;
  readonly promoted: {
    readonly trajectoryId: string;
    readonly version: number;
    readonly status: "validated" | "active";
    readonly decidedByDecisionRef?: string;
    readonly decidedOptionRef?: string;
  };
  readonly livingProjectStateVersion: number;
};

class DecideAtomicFailure extends Error {
  constructor(
    readonly code: string,
    message: string,
  ) {
    super(message);
    this.name = "DecideAtomicFailure";
  }
}

export async function decideTrajectory(
  input: DecideTrajectoryInput,
): Promise<DecideTrajectoryResult> {
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const { oa } = input;

  // A2 — exact presented OptionSet binding; never re-derive from live state.
  const loaded = await loadPresentedOptionSet(
    oa,
    input.projectId,
    input.optionSetRef,
  );
  if (!loaded.ok) {
    return { ok: false, code: loaded.code, message: loaded.message };
  }
  const presented = loaded.presented;

  if (
    presented.trajectoryId !== input.trajectoryId ||
    presented.candidateVersion !== input.candidateVersion
  ) {
    return {
      ok: false,
      code: "TRAJECTORY_MISMATCH",
      message:
        "La trajectoire/version client ne correspond pas à la liaison présentée.",
    };
  }

  const recomputedDigest = computeOptionSetDigest({
    cycleTypeId: presented.cycleTypeId,
    recommendedProfile: presented.recommendedProfile,
    criticalSignalsPresent: presented.criticalSignalsPresent,
    irreversible: presented.irreversible,
    reservations: presented.reservations,
    options: presented.options,
    recommendedOptionRef: presented.recommendedOptionRef,
  });
  if (recomputedDigest !== presented.optionSetDigest) {
    return {
      ok: false,
      code: "OPTION_SET_STALE",
      message:
        "Le digest du jeu d'options présenté ne correspond plus au contenu scellé.",
    };
  }

  // A2 — exact presented set stays the decision object, but only while the
  // material qualification context that produced it is still compatible.
  // Never re-derive a substitute OptionSet; refuse and require reinstruction.
  const liveQualification = await resolveW2QualificationInputs({
    oa,
    projectId: input.projectId,
  });
  if (!liveQualification.ok) {
    return {
      ok: false,
      code: liveQualification.code,
      message: liveQualification.message,
    };
  }
  const currentQualificationDigest = computeQualificationDigest({
    cycleTypeId: liveQualification.qualification.inputs.cycleTypeId,
    recommendedProfile: liveQualification.qualification.inputs.recommendedProfile,
    criticalSignalsPresent:
      liveQualification.qualification.inputs.criticalSignalsPresent,
    irreversible: liveQualification.qualification.inputs.irreversible,
    reservations: liveQualification.qualification.inputs.reservations,
    ckcAttribution: liveQualification.qualification.inputs.ckcAttribution,
  });
  if (currentQualificationDigest !== presented.qualificationDigest) {
    return {
      ok: false,
      code: "OPTION_SET_STALE",
      message:
        "Le contexte de qualification a changé depuis la présentation — réinstruction requise. Aucune décision enregistrée.",
    };
  }

  const options = presented.options;
  const recommendedOptionRef = presented.recommendedOptionRef;
  const epistemicRefs = presented.epistemicRefs;
  const optionSetDigest = presented.optionSetDigest;

  const selected = options.find(
    (o) => o.optionRef === input.selectedOptionRef,
  );
  if (!selected) {
    return {
      ok: false,
      code: "OPTION_NOT_PRESENTED",
      message:
        "Option inconnue pour ce jeu d'options — aucune décision enregistrée.",
    };
  }

  const candidate = await oa.cycleServices.getTrajectoryVersion.execute({
    projectId: input.projectId,
    version: input.candidateVersion,
  });
  if (!candidate.ok) {
    return {
      ok: false,
      code: candidate.error.detailCode,
      message: "Version de trajectoire proposée introuvable.",
    };
  }
  if (candidate.trajectory.trajectoryId !== input.trajectoryId) {
    return {
      ok: false,
      code: "TRAJECTORY_MISMATCH",
      message: "La version proposée n'appartient pas à cette trajectoire.",
    };
  }
  if (candidate.trajectory.status !== "candidate") {
    return {
      ok: false,
      code: "TRAJECTORY_NOT_PROPOSED",
      message: `La version ${input.candidateVersion} n'est pas au statut proposé (${candidate.trajectory.status}).`,
    };
  }

  const live = await readLiveProjectContext(oa, input.projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const scope = trajectoryDecisionScope(input.optionSetRef);
  const issuedAt = oa.clock.nowIso();
  const authority = registerLocalPiloteAuthority({
    authorityResolver: oa.authorityResolver,
    scope,
    issuedAt,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return { ok: false, code: authority.code, message: authority.message };
  }

  const optionRefs = options.map((o) => o.optionRef);
  const decisionBasis: DecisionBasis = {
    sourceType: "trajectory_option",
    sourceRef: input.optionSetRef,
    sourceDigest: computeDecisionBasisSourceDigest({
      optionSetRef: input.optionSetRef,
      optionSetDigest,
      optionRefs,
      selectedOptionRef: input.selectedOptionRef,
      recommendedOptionRef,
      trajectoryId: input.trajectoryId,
      candidateVersion: input.candidateVersion,
      steps: selected.steps.map((s) => ({
        stepId: s.stepId,
        order: s.order,
        label: s.label,
        gate: s.gate ?? null,
      })),
    }),
    projectId: input.projectId,
    cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
    proposalContext: {
      lpsId: live.context.lpsId,
      lpsVersion: live.context.lpsVersion,
      doctrineDigest: live.context.doctrineDigest,
      activeCycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
      ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
    },
    trajectoryContext: {
      trajectoryId: input.trajectoryId,
      candidateVersion: input.candidateVersion,
      optionRefs,
      selectedOptionRef: input.selectedOptionRef,
      recommendedOptionRef,
      epistemicRefs: epistemicRefs ? [...epistemicRefs] : undefined,
      optionSetDigest,
    },
    executionBasis: {
      objective: live.context.objective,
      scope: selected.intent,
      expectedOutcome: `Trajectoire décidée: ${selected.label}`,
      reservations: input.reservesText?.trim()
        ? [input.reservesText.trim()]
        : [...selected.reservations],
      stopConditions: ["AUCUNE EXÉCUTION", "STOP AVANT EXECUTE"],
      cycleTypeId: undefined,
      requestedOperation: `w2:decide-trajectory:${input.selectedOptionRef}`,
    },
  };

  const decisionId = `dec:w2-trj:${randomUUID()}`;
  const reserves = input.reservesText?.trim();

  let atomic: AtomicDecideOutcome;
  try {
    // A4/U3 — single Product UoW around HD + promote (nested UoWs join).
    atomic = await oa.projectServices.store.runInTransaction(async () => {
      const recorded = await oa.decisionServices.recordHumanDecision.execute({
        decisionId,
        projectId: input.projectId,
        cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
        subject: `W2 trajectory arbitration for ${input.optionSetRef}`,
        options: options.map((o) => ({
          optionId: o.optionRef,
          label: o.label,
          impacts: [...o.impacts],
          recommended: o.optionRef === recommendedOptionRef,
        })),
        selectedOptionId: input.selectedOptionRef,
        actor: LOCAL_PILOTE_ACTOR,
        authority: "morris",
        status: "accepted",
        reversible: true,
        scope,
        reservations: reserves
          ? [
              {
                reservationId: `rsv:${randomUUID()}`,
                statement: reserves,
                blocking: false,
              },
            ]
          : undefined,
        rationale: `Pilote a retenu ${selected.label} parmi ${optionRefs.length} options.`,
        authorityEvidenceId: authority.evidenceId,
        decisionBasis,
        linkToLivingProjectState: true,
        expectedLpsVersion: live.context.lpsVersion,
        correlationId: `w2-dec:${input.optionSetRef}`,
      });

      if (!recorded.ok) {
        throw new DecideAtomicFailure(
          recorded.error.detailCode,
          recorded.error.message,
        );
      }

      // Re-read the durable decision: promotion is authorised by persisted truth,
      // never by the in-flight request payload.
      const readback = await oa.decisionServices.getHumanDecision.execute({
        decisionId,
      });
      const guard = assertDecisionAuthorizesPromotion({
        decision: readback.ok ? readback.decision : null,
        projectId: input.projectId,
        trajectoryId: input.trajectoryId,
        candidateVersion: input.candidateVersion,
        selectedOptionRef: input.selectedOptionRef,
      });
      if (!guard.ok) {
        throw new DecideAtomicFailure(guard.code, guard.message);
      }

      const lpsAfterDecision =
        recorded.livingProjectStateVersion ?? live.context.lpsVersion;

      const promoted = await oa.cycleServices.promoteDecidedTrajectory.execute({
        trajectoryId: input.trajectoryId,
        projectId: input.projectId,
        expectedVersion: input.candidateVersion,
        status: "validated",
        decisionRef: decisionId,
        decidedOptionRef: input.selectedOptionRef,
        // A1 — seal selected option steps onto the decided trajectory.
        steps: structuredClone(selected.steps) as TrajectoryStep[],
        createdBy: LOCAL_PILOTE_ACTOR,
        correlationId: `w2-promote:${input.optionSetRef}`,
        expectedLpsVersion: lpsAfterDecision,
      });
      if (!promoted.ok) {
        throw new DecideAtomicFailure(
          promoted.error.detailCode,
          `Promotion de la trajectoire décidée refusée (${promoted.error.detailCode}).`,
        );
      }

      return {
        decisionId,
        promoted: {
          trajectoryId: promoted.trajectory.trajectoryId,
          version: promoted.trajectory.version,
          status: promoted.trajectory.status as "validated" | "active",
          decidedByDecisionRef: promoted.trajectory.decidedByDecisionRef,
          decidedOptionRef: promoted.trajectory.decidedOptionRef,
        },
        livingProjectStateVersion:
          promoted.livingProjectStateVersion ?? lpsAfterDecision,
      };
    });
  } catch (err) {
    if (err instanceof DecideAtomicFailure) {
      return { ok: false, code: err.code, message: err.message };
    }
    return {
      ok: false,
      code: "PERSISTENCE_FAILURE",
      message:
        "Échec atomique décision+promotion — aucune décision orpheline n'a été commitée.",
    };
  }

  // Epistemic DecisionRef is best-effort after the atomic HD+promote commit.
  await oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    items: [
      {
        epistemicItemId: `epi:w2-decref-${shortId()}`,
        type: "DecisionRef",
        statement: `Décision humaine ${atomic.decisionId} — option retenue ${input.selectedOptionRef} — trajectoire ${input.trajectoryId} v${atomic.promoted.version} décidée/courante.`,
        status: "active",
        source: atomic.decisionId,
        relatedObjects: [
          input.projectId,
          atomic.decisionId,
          input.trajectoryId,
          input.selectedOptionRef,
        ],
      },
    ],
    createdBy: LOCAL_PILOTE_ACTOR,
    correlationId: `w2-decref:${input.optionSetRef}`,
  });

  return {
    ok: true,
    decision: {
      decisionId: atomic.decisionId,
      selectedOptionRef: input.selectedOptionRef,
      actorRole: "Pilote",
      authorityClass: "morris",
      statusLabel: "DÉCISION HUMAINE PRISE",
      capturedAt: issuedAt,
      decisionBasisLinked: true,
      reservesText: reserves ?? null,
    },
    trajectory: {
      trajectoryId: atomic.promoted.trajectoryId,
      version: atomic.promoted.version,
      status: atomic.promoted.status,
      statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
      isCurrent: true,
      decidedByDecisionRef: atomic.promoted.decidedByDecisionRef ?? null,
      decidedOptionRef: atomic.promoted.decidedOptionRef ?? null,
    },
    livingProjectStateVersion: atomic.livingProjectStateVersion,
    executionPerformed: false,
  };
}
