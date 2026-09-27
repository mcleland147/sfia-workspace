/**
 * CORR-01 / C2 + CORR-02 / C4 + CORR-03 / C5 +
 * NATIVE-EXECUTION-LOOP-POST-EVIDENCE-RECOVERY-CORR-01 +
 * NATIVE-EXECUTION-LOOP-GREENFIELD-CONTINUITY-CORR-01 —
 * recover recovery-owned HumanDecision after hard UI restart.
 *
 * Durable source (no new store):
 *   current ProjectTrajectory
 *   → decidedByDecisionRef
 *   → HumanDecision (accepted)
 *   → DecisionBasis trajectory_option + trajectoryContext
 *   → selectedOptionId = GOVERNED_OPTION_REF
 *   → coherent PostEvidenceRecoveryContext
 *
 * Legacy docs_write RecoveryExecutionBinding is OPTIONAL (legacy CTA only).
 * Structural recovery ownership does NOT require it — generic NELC PREPARE
 * re-resolves RecoveryContext server-side from durable truth.
 *
 * CORR-03: CORRUPTED / CONTRADICTORY GOVERNED AUTHORITY ≠ NO RECOVERY SUBJECT.
 * kind=none only when neither trajectory nor decision claims GOVERNED,
 * OR when GOVERNED tip has no post-Evidence recovery subject.
 *
 * GREENFIELD-CONTINUITY: absence of CURRENT is multi-semantic —
 *   never / legitimate undecided candidate → kind=none
 *   broken GOVERNED / LPS orphan / unknown reader → fail-closed
 * NEVER blind-map TRAJECTORY_NOT_FOUND → kind=none.
 * NEVER map missing Project → kind=none.
 *
 * READ-ONLY. Never PREPARE / Inspect / Execute.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { DecisionBasis } from "@/lib/oa/decision/domain/types";
import type { ProjectTrajectory } from "@/lib/oa/cycle/domain/types";
import { resolveTrajectoryBootstrapPresence } from "@/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap";
import { GOVERNED_OPTION_REF } from "./trajectoryOptions";
import {
  resolvePostEvidenceRecoveryContext,
  type PostEvidenceRecoveryContext,
} from "./resolvePostEvidenceRecoveryContext";
import {
  resolveRecoveryExecutionBinding,
  type RecoveryExecutionBinding,
} from "./resolveRecoveryExecutionBinding";
import type {
  DecidedTrajectoryDto,
  TrajectoryDecisionRecordDto,
  W2Failure,
} from "./types";

export type RecoveryOwnedDecisionContinuityResult =
  | {
      readonly ok: true;
      readonly kind: "none";
    }
  | {
      readonly ok: true;
      readonly kind: "owned";
      readonly decision: TrajectoryDecisionRecordDto;
      readonly trajectory: DecidedTrajectoryDto;
      /** Durable post-Evidence subject — sufficient for generic NELC PREPARE. */
      readonly recoveryContext: PostEvidenceRecoveryContext;
      /**
       * Legacy docs_write successor binding when CLASS 1/2 source matches.
       * Null for generic NELC / succeeded+NOT_PROVEN / UNCLAIMED shapes —
       * not required for structural ownership.
       */
      readonly binding: RecoveryExecutionBinding | null;
    }
  | W2Failure;

function fail(code: string, message: string): W2Failure {
  return { ok: false, code, message };
}

function continuityFailed(message: string): W2Failure {
  return fail("RECOVERY_DECISION_CONTINUITY_FAILED", message);
}

function toDecisionDto(input: {
  readonly decisionId: string;
  readonly selectedOptionRef: string;
  readonly capturedAt: string;
  readonly reservesText: string | null;
}): TrajectoryDecisionRecordDto {
  return {
    decisionId: input.decisionId,
    selectedOptionRef: input.selectedOptionRef,
    actorRole: "Pilote",
    // PRE-EXISTING DOCTRINAL PRESENTATION DEBT — RUNTIME PILOT HD DTO
    // AUTHORITY LABEL. Not corrected in this macro (separate qualification).
    authorityClass: "morris",
    statusLabel: "DÉCISION HUMAINE PRISE",
    capturedAt: input.capturedAt,
    decisionBasisLinked: true,
    reservesText: input.reservesText,
    proposalId: null,
  };
}

/**
 * CORR-02 / C4 — prove the durable HD is the exact authority that produced
 * the current ProjectTrajectory tip.
 *
 * Version rule (from promoteDecidedTrajectory): promotion mutates the candidate
 * in place (same version, status candidate → validated/active). Therefore
 * `basis.trajectoryContext.candidateVersion === trajectory.version`.
 */
export function assertGovernedRecoveryLineage(input: {
  readonly projectId: string;
  readonly trajectory: ProjectTrajectory;
  readonly decisionId: string;
  readonly selectedOptionId: string;
  readonly basis: DecisionBasis;
}): W2Failure | null {
  const { projectId, trajectory, decisionId, selectedOptionId, basis } = input;

  if (trajectory.decidedByDecisionRef !== decisionId) {
    return continuityFailed(
      "decidedByDecisionRef ≠ HumanDecision tip — lignée recovery incohérente.",
    );
  }

  if (trajectory.decidedOptionRef !== GOVERNED_OPTION_REF) {
    return continuityFailed(
      "Trajectoire tip decidedOptionRef ≠ GOVERNED — lignée recovery fail-closed.",
    );
  }

  if (selectedOptionId !== GOVERNED_OPTION_REF) {
    return continuityFailed(
      "HumanDecision selectedOptionId ≠ GOVERNED — lignée recovery fail-closed.",
    );
  }

  if (selectedOptionId !== trajectory.decidedOptionRef) {
    return continuityFailed(
      "HumanDecision selectedOptionId ≠ trajectory.decidedOptionRef — lignée recovery fail-closed.",
    );
  }

  if (basis.projectId !== projectId) {
    return continuityFailed(
      "DecisionBasis.projectId hors projet — lignée recovery fail-closed.",
    );
  }

  const ctx = basis.trajectoryContext;
  if (!ctx) {
    return continuityFailed(
      "DecisionBasis.trajectoryContext absent — lignée recovery fail-closed.",
    );
  }

  if (ctx.trajectoryId !== trajectory.trajectoryId) {
    return continuityFailed(
      "trajectoryContext.trajectoryId ≠ trajectoire tip — lignée recovery fail-closed.",
    );
  }

  if (ctx.selectedOptionRef !== GOVERNED_OPTION_REF) {
    return continuityFailed(
      "trajectoryContext.selectedOptionRef ≠ GOVERNED — lignée recovery fail-closed.",
    );
  }

  if (!ctx.optionRefs.includes(GOVERNED_OPTION_REF)) {
    return continuityFailed(
      "trajectoryContext.optionRefs n'inclut pas GOVERNED — lignée recovery fail-closed.",
    );
  }

  if (ctx.selectedOptionRef !== selectedOptionId) {
    return continuityFailed(
      "trajectoryContext.selectedOptionRef ≠ décision — lignée recovery fail-closed.",
    );
  }

  // promoteDecidedTrajectory keeps candidate version identity on the tip.
  if (
    typeof ctx.candidateVersion !== "number" ||
    ctx.candidateVersion < 1 ||
    ctx.candidateVersion !== trajectory.version
  ) {
    return continuityFailed(
      "trajectoryContext.candidateVersion ≠ version tip promue — lignée recovery fail-closed.",
    );
  }

  if (trajectory.status !== "validated" && trajectory.status !== "active") {
    return continuityFailed(
      "Trajectoire tip recovery hors statut décidé/courant — continuité refusée.",
    );
  }

  return null;
}

/**
 * Qualify TRAJECTORY_NOT_FOUND without collapsing UNKNOWN / broken GOVERNED
 * continuity into greenfield absence.
 *
 * Reuses resolveTrajectoryBootstrapPresence (KEEP) — no parallel engine.
 */
async function qualifyAbsenceOfCurrentTrajectory(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<RecoveryOwnedDecisionContinuityResult> {
  const { oa, projectId } = input;

  let presence;
  try {
    presence = await resolveTrajectoryBootstrapPresence(
      oa.cycleServices.trajectories,
      projectId,
    );
  } catch (error) {
    return continuityFailed(
      `Présence trajectoire illisible — UNKNOWN ≠ absence (${
        error instanceof Error ? error.message : "trajectory_presence_unresolved"
      }).`,
    );
  }

  if (presence.kind === "unknown") {
    return continuityFailed(
      "Présence trajectoire UNKNOWN — fail-closed (pas de kind=none).",
    );
  }

  if (presence.kind === "current") {
    return continuityFailed(
      "Contradiction: current absente via getCurrent mais présence current — fail-closed.",
    );
  }

  const lpsResult =
    await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
  if (!lpsResult.ok) {
    return fail(
      lpsResult.error.detailCode,
      lpsResult.error.message ??
        "LPS illisible — continuité recovery refusée (UNKNOWN ≠ absence).",
    );
  }
  const lps = lpsResult.livingProjectState;
  const lpsTrajectoryId = lps.trajectoryId?.trim() || null;

  if (lpsTrajectoryId) {
    let linked: ProjectTrajectory | null;
    try {
      linked = await oa.cycleServices.trajectories.findById(lpsTrajectoryId);
    } catch (error) {
      return continuityFailed(
        `Lecture trajectoire LPS impossible — UNKNOWN ≠ absence (${
          error instanceof Error ? error.message : "trajectory_read_failed"
        }).`,
      );
    }
    if (!linked) {
      return continuityFailed(
        "LPS trajectory ref orpheline — lignée recovery fail-closed.",
      );
    }
    if (linked.projectId !== projectId) {
      return continuityFailed(
        "LPS trajectory hors projet — lignée recovery fail-closed.",
      );
    }
    // Decided/current statuses without CURRENT pointer = broken continuity.
    if (linked.status === "validated" || linked.status === "active") {
      return continuityFailed(
        "Trajectoire décidée/active sans pointeur current — lignée recovery fail-closed.",
      );
    }
    if (linked.decidedByDecisionRef || linked.decidedOptionRef) {
      return continuityFailed(
        "Candidate portant décision durable sans current — lignée recovery fail-closed.",
      );
    }
    // else: coherent undecided candidate linked from LPS — fall through.
  }

  const history = await oa.decisionServices.listDecisionHistory.execute({
    projectId,
  });
  if (!history.ok) {
    return fail(
      history.error.detailCode,
      history.error.message ??
        "Historique décisions illisible — continuité recovery refusée (UNKNOWN ≠ absence).",
    );
  }

  const governedTrajectoryClaim = history.decisions.find(
    (decision) =>
      decision.status === "accepted" &&
      decision.selectedOptionId === GOVERNED_OPTION_REF &&
      decision.decisionBasis?.sourceType === "trajectory_option",
  );
  if (governedTrajectoryClaim) {
    return continuityFailed(
      "HumanDecision GOVERNED trajectory_option sans current — lignée recovery fail-closed.",
    );
  }

  // presence: never | history_without_current without GOVERNED claim
  // = genuine greenfield OR legitimate pre-decision candidate.
  return { ok: true, kind: "none" };
}

/**
 * Resolve whether the current ProjectTrajectory tip is a recovery-owned
 * GOVERNED HumanDecision with a coherent PostEvidenceRecoveryContext.
 */
export async function readRecoveryOwnedDecisionContinuity(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<RecoveryOwnedDecisionContinuityResult> {
  const { oa, projectId } = input;
  if (!projectId.startsWith("prj:")) {
    return fail(
      "CONTRACT_INVALID",
      "Identifiant de projet invalide — continuité recovery refusée.",
    );
  }

  // Durable Project must exist before any kind=none greenfield claim.
  const project = await oa.projectServices.getProject.execute({ projectId });
  if (!project.ok) {
    return fail(
      project.error.detailCode,
      project.error.message ??
        "Projet introuvable — continuité recovery refusée.",
    );
  }

  const current = await oa.cycleServices.getCurrentTrajectory.execute({
    projectId,
  });
  if (!current.ok) {
    if (current.error.detailCode === "TRAJECTORY_NOT_FOUND") {
      return qualifyAbsenceOfCurrentTrajectory({ oa, projectId });
    }
    return fail(
      current.error.detailCode,
      current.error.message ??
        "Lecture de la trajectoire courante impossible — continuité recovery refusée.",
    );
  }

  const trajectory = current.trajectory;
  const decisionRef = trajectory.decidedByDecisionRef?.trim() || null;
  if (!decisionRef) {
    return { ok: true, kind: "none" };
  }

  const loaded = await oa.decisionServices.getHumanDecision.execute({
    decisionId: decisionRef,
  });
  if (!loaded.ok) {
    return continuityFailed(
      "HumanDecision recovery tip introuvable — fail-closed (pas de PREPARE générique, pas de nouvelle décision).",
    );
  }
  const decision = loaded.decision;
  if (decision.projectId !== projectId) {
    return continuityFailed(
      "HumanDecision tip hors projet — continuité recovery refusée.",
    );
  }
  if (decision.status !== "accepted") {
    return continuityFailed(
      "HumanDecision tip non effective — continuité recovery refusée.",
    );
  }

  // CORR-03 / C5 — ABSENT vs CORRUPTED GOVERNED CLAIM.
  const trajectoryClaimsGoverned =
    trajectory.decidedOptionRef === GOVERNED_OPTION_REF;
  const decisionClaimsGoverned =
    decision.selectedOptionId === GOVERNED_OPTION_REF;

  if (!trajectoryClaimsGoverned && !decisionClaimsGoverned) {
    // Coherent non-GOVERNED tip — not recovery-owned restart path.
    return { ok: true, kind: "none" };
  }

  // From here: durable truth claims GOVERNED on at least one side.
  // CORRUPTED / CONTRADICTORY GOVERNED AUTHORITY ≠ NO RECOVERY SUBJECT.
  const basis = decision.decisionBasis;
  if (!basis) {
    return continuityFailed(
      "Claim GOVERNED durable sans DecisionBasis — lignée recovery fail-closed.",
    );
  }
  if (basis.sourceType !== "trajectory_option") {
    return continuityFailed(
      "Claim GOVERNED durable avec DecisionBasis hors trajectory_option — lignée recovery fail-closed.",
    );
  }

  const lineage = assertGovernedRecoveryLineage({
    projectId,
    trajectory,
    decisionId: decision.decisionId,
    selectedOptionId: decision.selectedOptionId,
    basis,
  });
  if (lineage) return lineage;

  // Durable cross-check: candidate version row belongs to same aggregate.
  const candidateRow = await oa.cycleServices.getTrajectoryVersion.execute({
    projectId,
    version: basis.trajectoryContext!.candidateVersion,
  });
  if (!candidateRow.ok) {
    return continuityFailed(
      "Version candidate DecisionBasis illisible — lignée recovery fail-closed.",
    );
  }
  if (candidateRow.trajectory.trajectoryId !== trajectory.trajectoryId) {
    return continuityFailed(
      "Version candidate DecisionBasis hors trajectoire tip — lignée recovery fail-closed.",
    );
  }

  // Structural oracle: PostEvidenceRecoveryContext (generic NELC).
  // docs_write RecoveryExecutionBinding is legacy-only and never required here.
  const recovered = await resolvePostEvidenceRecoveryContext({
    oa,
    projectId,
  });
  if (!recovered.ok) {
    return fail(
      recovered.code,
      recovered.message ||
        "Sujet recovery illisible après restart — fail-closed.",
    );
  }
  if (recovered.context == null) {
    // Coherent GOVERNED tip without post-Evidence recovery subject —
    // not the recovery-owned restart path (RC-06 / other GOVERNED contexts).
    return { ok: true, kind: "none" };
  }

  // Best-effort legacy docs_write binding — failure/null does not deny ownership.
  let legacyBinding: RecoveryExecutionBinding | null = null;
  const bound = await resolveRecoveryExecutionBinding({
    oa,
    projectId,
    decisionId: decision.decisionId,
  });
  if (
    bound.ok &&
    bound.binding &&
    bound.binding.kind === "post_evidence_recovery_execution"
  ) {
    legacyBinding = bound.binding;
  }

  const status = trajectory.status as "validated" | "active";

  return {
    ok: true,
    kind: "owned",
    decision: toDecisionDto({
      decisionId: decision.decisionId,
      selectedOptionRef: GOVERNED_OPTION_REF,
      capturedAt: decision.effectiveAt,
      reservesText:
        decision.reservations && decision.reservations.length > 0
          ? decision.reservations.map((r) => r.statement).join("; ")
          : null,
    }),
    trajectory: {
      trajectoryId: trajectory.trajectoryId,
      version: trajectory.version,
      status,
      statusLabel: "TRAJECTOIRE DÉCIDÉE / COURANTE",
      isCurrent: true,
      decidedByDecisionRef: decision.decisionId,
      decidedOptionRef: GOVERNED_OPTION_REF,
    },
    recoveryContext: recovered.context,
    binding: legacyBinding,
  };
}
