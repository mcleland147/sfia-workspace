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
 *
 * CORR-PROOF-10 — Proposal subject OptionSets record HD only (ZERO promotion).
 * Client trajectoryId/candidateVersion are hostile and ignored in that mode.
 */

import { randomBytes, randomUUID } from "node:crypto";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  readLiveProjectContext,
  resolveProductDoctrineRegistryRoot,
} from "@/lib/vertical-slice-runtime";
import type { DecisionBasis, HumanDecision } from "@/lib/oa/decision";
import {
  computeDecisionBasisSourceDigest,
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import type { TrajectoryStep } from "@/lib/oa/cycle";
import {
  computeCkcSemanticFingerprint,
  loadProductCkcCognitiveContent,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import {
  computeOptionSetDigest,
  computeQualificationDigest,
  isProposalSubjectPresentedSet,
  loadPresentedOptionSet,
} from "./presentedOptionSet";
import { resolvePendingDecisionSubjectMarker } from "./pendingDecisionSubjectMarker";
import {
  PROPOSAL_SUBJECT_AMEND_REF,
  PROPOSAL_SUBJECT_PURSUE_REF,
  PROPOSAL_SUBJECT_REFUSE_REF,
} from "./proposalSubjectOptions";
import { resolveW2QualificationInputs } from "./qualificationInputs";
import type { DecideTrajectoryResult, TrajectoryOptionDto } from "./types";
import { updateProposalStatus } from "../f2/proposalStore";
import type { F2ProposalStatus } from "../f2/types";

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
  /**
   * Required for project_trajectory mode. Hostile / ignored for proposal mode
   * (authority comes from the sealed PresentedOptionSet only).
   */
  readonly trajectoryId?: string | null;
  readonly candidateVersion?: number | null;
  readonly epistemicRefs?: readonly string[];
  readonly reservesText?: string | null;
  /** Hostile client fields — never trusted. */
  readonly canActAsMorris?: unknown;
  readonly claimedAuthorityLevel?: unknown;
  /** Test inject for the local single-user authority gate. */
  readonly forceLocalAuthority?: boolean;
};

type AtomicDecideOutcome =
  | {
      readonly mode: "proposal";
      readonly decisionId: string;
      readonly livingProjectStateVersion: number;
      readonly proposalId: string;
      readonly markerReason: "decided" | "amended" | "refused";
      readonly nextProposalStatus: F2ProposalStatus;
    }
  | {
      readonly mode: "project_trajectory";
      readonly decisionId: string;
      readonly promoted: {
        readonly trajectoryId: string;
        readonly version: number;
        readonly status: "validated" | "active";
        readonly decidedByDecisionRef?: string;
        readonly decidedOptionRef?: string;
        readonly isCurrent: true;
        readonly statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE";
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
  const proposalSubjectMode = isProposalSubjectPresentedSet(presented);

  // Durable closure: a DecisionRef for this OptionSet means subject already decided.
  if (proposalSubjectMode) {
    const epistemic = await oa.cycleServices.getEpistemicState.execute({
      projectId: input.projectId,
    });
    if (!epistemic.ok) {
      return {
        ok: false,
        code: "EPISTEMIC_READ_FAILED",
        message:
          "État épistémique illisible — aucune HumanDecision possible sur ce sujet.",
      };
    }
    const alreadyDecided = epistemic.state.items.some(
      (i) =>
        i.type === "DecisionRef" &&
        i.status === "active" &&
        (i.relatedObjects ?? []).includes(input.optionSetRef),
    );
    if (alreadyDecided) {
      return {
        ok: false,
        code: "SUBJECT_ALREADY_DECIDED",
        message:
          "Ce PresentedOptionSet Proposal a déjà reçu une HumanDecision — aucune seconde décision.",
      };
    }
  }

  if (!proposalSubjectMode) {
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
  }
  // Proposal mode: ignore hostile client trajectoryId / candidateVersion.

  const recomputedDigest = computeOptionSetDigest({
    cycleTypeId: presented.cycleTypeId,
    recommendedProfile: presented.recommendedProfile,
    criticalSignalsPresent: presented.criticalSignalsPresent,
    irreversible: presented.irreversible,
    reservations: presented.reservations,
    options: presented.options,
    recommendedOptionRef: presented.recommendedOptionRef,
    proposalId: presented.proposalId ?? null,
    proposalSubjectDigest: presented.proposalSubjectDigest ?? null,
    decisionSubjectMode: presented.decisionSubjectMode,
  });
  if (recomputedDigest !== presented.optionSetDigest) {
    return {
      ok: false,
      code: "OPTION_SET_STALE",
      message:
        "Le digest du jeu d'options présenté ne correspond plus au contenu scellé.",
    };
  }

  if (proposalSubjectMode) {
    if (
      !presented.sealedExecutionBasis ||
      !presented.proposalSubjectDigest ||
      !presented.proposalId
    ) {
      return {
        ok: false,
        code: "PROPOSAL_SUBJECT_BINDING_INCOMPLETE",
        message:
          "OptionSet Proposal sans executionBasis/digest scellés — fail-closed.",
      };
    }
  } else if (
    presented.proposalId ||
    presented.sealedExecutionBasis ||
    presented.promotesProjectTrajectory === false ||
    presented.decisionSubjectMode === "proposal"
  ) {
    return {
      ok: false,
      code: "SUBJECT_OPTION_SET_MISMATCH",
      message:
        "Liaison sujet Proposal incohérente avec le mode trajectoire — fail-closed.",
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
  const currentQual = liveQualification.qualification;
  const registryRoot = resolveProductDoctrineRegistryRoot();
  const liveCkc = loadProductCkcCognitiveContent({
    registryRoot,
    cycleTypeId: currentQual.inputs.cycleTypeId,
    packagePin: currentQual.packagePin,
  });
  const liveFingerprint = liveCkc
    ? computeCkcSemanticFingerprint(liveCkc.provenance)
    : null;
  const currentQualificationDigest = computeQualificationDigest({
    cycleTypeId: currentQual.inputs.cycleTypeId,
    recommendedProfile: currentQual.inputs.recommendedProfile,
    criticalSignalsPresent: currentQual.inputs.criticalSignalsPresent,
    irreversible: currentQual.inputs.irreversible,
    reservations: currentQual.inputs.reservations,
    ckcAttribution: currentQual.inputs.ckcAttribution,
    ckcSemanticFingerprint: liveFingerprint,
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

  // Trajectory candidate load — project_trajectory mode only.
  if (!proposalSubjectMode) {
    if (
      typeof input.trajectoryId !== "string" ||
      !input.trajectoryId.trim() ||
      typeof input.candidateVersion !== "number"
    ) {
      return {
        ok: false,
        code: "TRAJECTORY_REQUIRED",
        message:
          "trajectoryId/candidateVersion requis pour une décision de trajectoire Project.",
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
  const sealed = presented.sealedExecutionBasis;
  const decisionBasis: DecisionBasis = proposalSubjectMode
    ? {
        sourceType: "proposal",
        sourceRef: presented.proposalId!,
        sourceDigest: presented.proposalSubjectDigest!,
        projectId: input.projectId,
        cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
        proposalContext: {
          lpsId: live.context.lpsId,
          lpsVersion: live.context.lpsVersion,
          doctrineDigest: live.context.doctrineDigest,
          activeCycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
          ckcResolutionRef: live.context.ckcResolutionRef ?? undefined,
        },
        // NO trajectoryContext — Proposal subject never binds ProjectTrajectory.
        executionBasis: {
          objective: sealed!.objective,
          scope: sealed!.scope,
          outOfScope: [...sealed!.outOfScope],
          activatedBlocks: [...sealed!.activatedBlocks],
          expectedOutcome: sealed!.expectedOutcome,
          risks: [...sealed!.risks],
          reservations: input.reservesText?.trim()
            ? [input.reservesText.trim(), ...sealed!.reservations]
            : [...sealed!.reservations],
          stopConditions: [...sealed!.stopConditions],
          cycleTypeId: sealed!.cycleTypeId,
          recommendedProfile: sealed!.recommendedProfile,
          requestedOperation: sealed!.requestedOperation,
          intentKind: sealed!.intentKind ?? undefined,
          artifactType: sealed!.artifactType ?? undefined,
          targetRepositoryRef: sealed!.targetRepositoryRef ?? undefined,
          targetPath: sealed!.targetPath ?? undefined,
          artifactFileName: sealed!.artifactFileName ?? undefined,
          artifactWriteMode:
            sealed!.artifactWriteMode === "CREATE" ||
            sealed!.artifactWriteMode === "UPDATE" ||
            sealed!.artifactWriteMode === "ASK"
              ? sealed!.artifactWriteMode
              : undefined,
          scopeIn: [...sealed!.scopeIn],
          scopeOut: [...sealed!.scopeOut],
          expectedOutputs: [...sealed!.expectedOutputs],
          requiredCapabilities: [...sealed!.requiredCapabilities],
          validationExpectations: [...sealed!.validationExpectations],
          evidenceRequirements: [...sealed!.evidenceRequirements],
          reversibilityExpectation:
            sealed!.reversibilityExpectation ?? undefined,
          artifactBrief: sealed!.artifactBrief ?? undefined,
          contentRequirements: [...sealed!.contentRequirements],
          exitRequirementKinds: [...sealed!.exitRequirementKinds],
        },
      }
    : {
        sourceType: "trajectory_option",
        sourceRef: input.optionSetRef,
        sourceDigest: computeDecisionBasisSourceDigest({
          optionSetRef: input.optionSetRef,
          optionSetDigest,
          optionRefs,
          selectedOptionRef: input.selectedOptionRef,
          recommendedOptionRef,
          trajectoryId: input.trajectoryId!,
          candidateVersion: input.candidateVersion!,
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
          trajectoryId: input.trajectoryId!,
          candidateVersion: input.candidateVersion!,
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

  const decisionId = proposalSubjectMode
    ? `dec:w2-prop:${randomUUID()}`
    : `dec:w2-trj:${randomUUID()}`;
  const reserves = input.reservesText?.trim();
  const decisionSubject = proposalSubjectMode
    ? `W2 Proposal subject arbitration for ${presented.proposalId}`
    : `W2 trajectory arbitration for ${input.optionSetRef}`;

  let atomic: AtomicDecideOutcome;
  try {
    // A4/U3 — single Product UoW around HD (+ promote only for true trajectory).
    atomic = await oa.projectServices.store.runInTransaction(async () => {
      const recorded = await oa.decisionServices.recordHumanDecision.execute({
        decisionId,
        projectId: input.projectId,
        cycleInstanceId: live.context.activeCycleInstanceId ?? undefined,
        subject: decisionSubject,
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
        correlationId: proposalSubjectMode
          ? `w2-dec-prop:${presented.proposalId}`
          : `w2-dec:${input.optionSetRef}`,
      });

      if (!recorded.ok) {
        throw new DecideAtomicFailure(
          recorded.error.detailCode,
          recorded.error.message,
        );
      }

      const lpsAfterDecision =
        recorded.livingProjectStateVersion ?? live.context.lpsVersion;

      if (proposalSubjectMode) {
        // Non-trajectory Proposal subject — HD + DecisionRef closure in ONE UoW.
        // ZERO ProjectTrajectory. ProposalStore is updated only AFTER durable success.
        let nextProposalStatus: F2ProposalStatus = "APPROVED";
        let markerReason: "decided" | "amended" | "refused" = "decided";
        if (input.selectedOptionRef === PROPOSAL_SUBJECT_REFUSE_REF) {
          nextProposalStatus = "REFUSED";
          markerReason = "refused";
        } else if (input.selectedOptionRef === PROPOSAL_SUBJECT_AMEND_REF) {
          nextProposalStatus = "AMENDMENT_REQUIRED";
          markerReason = "amended";
        } else if (input.selectedOptionRef === PROPOSAL_SUBJECT_PURSUE_REF) {
          nextProposalStatus = reserves
            ? "APPROVED_WITH_RESERVES"
            : "APPROVED";
          markerReason = "decided";
        }

        const closure = await oa.cycleServices.updateEpistemicState.execute({
          projectId: input.projectId,
          items: [
            {
              epistemicItemId: `epi:w2-decref-prop:${input.optionSetRef.replace(/[^a-zA-Z0-9:_-]/g, "-")}`.slice(
                0,
                180,
              ),
              type: "DecisionRef",
              statement: `Décision humaine ${decisionId} — option retenue ${input.selectedOptionRef} — sujet Proposal ${presented.proposalId} (ProjectTrajectory non promue).`,
              status: "active",
              source: decisionId,
              relatedObjects: [
                input.projectId,
                decisionId,
                input.selectedOptionRef,
                input.optionSetRef,
                presented.proposalId!,
                ...epistemicRefs,
              ],
            },
          ],
          createdBy: LOCAL_PILOTE_ACTOR,
          correlationId: `w2-decref-prop:${input.optionSetRef}`,
        });
        if (!closure.ok) {
          throw new DecideAtomicFailure(
            closure.error.detailCode,
            `Closure DecisionRef Proposal échouée (${closure.error.detailCode}) — HumanDecision non autoritaire; rollback UoW.`,
          );
        }

        return {
          mode: "proposal" as const,
          decisionId,
          livingProjectStateVersion: lpsAfterDecision,
          proposalId: presented.proposalId!,
          markerReason,
          nextProposalStatus,
        };
      }

      // Re-read the durable decision: promotion is authorised by persisted truth,
      // never by the in-flight request payload.
      const readback = await oa.decisionServices.getHumanDecision.execute({
        decisionId,
      });
      const guard = assertDecisionAuthorizesPromotion({
        decision: readback.ok ? readback.decision : null,
        projectId: input.projectId,
        trajectoryId: input.trajectoryId!,
        candidateVersion: input.candidateVersion!,
        selectedOptionRef: input.selectedOptionRef,
      });
      if (!guard.ok) {
        throw new DecideAtomicFailure(guard.code, guard.message);
      }

      const promoted = await oa.cycleServices.promoteDecidedTrajectory.execute({
        trajectoryId: input.trajectoryId!,
        projectId: input.projectId,
        expectedVersion: input.candidateVersion!,
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
        mode: "project_trajectory" as const,
        decisionId,
        promoted: {
          trajectoryId: promoted.trajectory.trajectoryId,
          version: promoted.trajectory.version,
          status: promoted.trajectory.status as "validated" | "active",
          decidedByDecisionRef: promoted.trajectory.decidedByDecisionRef,
          decidedOptionRef: promoted.trajectory.decidedOptionRef,
          isCurrent: true as const,
          statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE" as const,
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

  if (atomic.mode === "proposal") {
    // Process-local ProposalStore is NOT transactional — update only after durable success.
    updateProposalStatus(atomic.proposalId, atomic.nextProposalStatus);
    await resolvePendingDecisionSubjectMarker({
      oa,
      projectId: input.projectId,
      proposalId: atomic.proposalId,
      reason: atomic.markerReason,
      correlationId: `cor:pending-decide:${atomic.proposalId}`,
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
        proposalId: atomic.proposalId,
      },
      trajectory: null,
      livingProjectStateVersion: atomic.livingProjectStateVersion,
      executionPerformed: false,
      promotesProjectTrajectory: false,
      decisionSubjectMode: "proposal",
    };
  }

  // ProjectTrajectory path — historical DecisionRef remains post-commit (unchanged scope).
  await oa.cycleServices.updateEpistemicState.execute({
    projectId: input.projectId,
    items: [
      {
        epistemicItemId: `epi:w2-decref-${shortId()}`,
        type: "DecisionRef",
        statement: `Décision humaine ${atomic.decisionId} — option retenue ${input.selectedOptionRef} — trajectoire ${atomic.promoted.trajectoryId} v${atomic.promoted.version} décidée/courante.`,
        status: "active",
        source: atomic.decisionId,
        relatedObjects: [
          input.projectId,
          atomic.decisionId,
          input.selectedOptionRef,
          input.optionSetRef,
          atomic.promoted.trajectoryId,
          ...epistemicRefs,
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
      proposalId: null,
    },
    trajectory: {
      trajectoryId: atomic.promoted.trajectoryId,
      version: atomic.promoted.version,
      status: atomic.promoted.status,
      statusLabel: atomic.promoted.statusLabel,
      isCurrent: atomic.promoted.isCurrent,
      decidedByDecisionRef: atomic.promoted.decidedByDecisionRef ?? null,
      decidedOptionRef: atomic.promoted.decidedOptionRef ?? null,
    },
    livingProjectStateVersion: atomic.livingProjectStateVersion,
    executionPerformed: false,
    promotesProjectTrajectory: true,
    decisionSubjectMode: "project_trajectory",
  };
}
