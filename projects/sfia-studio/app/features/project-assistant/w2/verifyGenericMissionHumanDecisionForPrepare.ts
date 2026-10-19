/**
 * M-HD-01 — verify durable OA HumanDecision for Generic PREPARE resume
 * and for Confirm/Authorize currentness (CR-03).
 *
 * Never fabricates HD. Never treats Confirmation as HD.
 * Read-only — no Build / PREPARE side effects.
 */

import { validateDecisionBasis } from "@/lib/oa/decision";
import type { HumanDecision } from "@/lib/oa/decision";
import {
  assessExecutionMateriality,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { IntentAnalysisDto } from "../f2/types";
import { resolveAuthoritativeProductMateriality } from "./resolveAuthoritativeProductMateriality";
import { resolveGenericPrepareCapabilityEnvelope } from "./genericPrepareCapabilityEnvelope";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  isGenericMissionAcceptedAuthorityOption,
  assertExecutionContractInternalConsistency,
  compareExecutionContractToSealedHumanDecision,
  evaluateLpsTransitionAfterHumanDecision,
  materialCurrentnessMatch,
  materialityContinuityCompatible,
  projectExecutionContractEffects,
  verifyGenericMissionSnapshotIntegrity,
  type GenericMissionCurrentMaterial,
  type LpsMaterialSnapshot,
  type OaReversibility,
} from "./genericMissionSubject";

export type VerifiedGenericMissionHumanDecision = {
  readonly decisionId: string;
  readonly decision: HumanDecision;
  readonly missionSubjectId: string;
  readonly presentationDigest: string;
};

export type VerifyGenericMissionHumanDecisionResult =
  | { readonly ok: true; readonly verified: VerifiedGenericMissionHumanDecision }
  | { readonly ok: false; readonly code: string; readonly message: string };

type LpsDoctrineRefLike = {
  readonly digest?: string;
  readonly contentDigest?: string;
  readonly packageDigest?: string;
};

function doctrineDigestFromLps(lps: {
  readonly doctrinePackageRef?: LpsDoctrineRefLike | null;
}): string {
  const ref = lps.doctrinePackageRef ?? undefined;
  return (
    (typeof ref?.digest === "string" ? ref.digest.trim() : "") ||
    (typeof ref?.contentDigest === "string" ? ref.contentDigest.trim() : "") ||
    (typeof ref?.packageDigest === "string" ? ref.packageDigest.trim() : "") ||
    ""
  );
}

function lpsSnapshotFromState(lps: {
  readonly version: number;
  readonly objective: string;
  readonly context?: string;
  readonly scope?: string;
  readonly constraints?: readonly string[];
  readonly doctrinePackageRef?: LpsDoctrineRefLike | null;
  readonly activeCycleInstanceId?: string | null;
  readonly trajectoryId?: string | null;
  readonly trajectoryVersion?: number | null;
  readonly decisionIds?: readonly string[];
}): LpsMaterialSnapshot {
  return {
    version: lps.version,
    objective: lps.objective,
    context: lps.context,
    scope: lps.scope,
    constraints: lps.constraints ? [...lps.constraints] : undefined,
    doctrineDigest: doctrineDigestFromLps(lps),
    activeCycleInstanceId: lps.activeCycleInstanceId ?? null,
    trajectoryId: lps.trajectoryId ?? null,
    trajectoryVersion: lps.trajectoryVersion ?? null,
    decisionIds: lps.decisionIds ? [...lps.decisionIds] : undefined,
  };
}

export function buildCurrentMaterialFromAnalysis(input: {
  readonly analysis: IntentAnalysisDto;
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly repositoryBindingIdentity: string | null;
  readonly pathRoot: string | null;
  readonly requiredCapabilities: readonly string[];
  readonly cycleInstanceId: string | null;
}): GenericMissionCurrentMaterial {
  const analysis = input.analysis;
  const objective = (
    analysis.objective ??
    analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (analysis.scope ?? expectedOutcome).trim();
  const ei = analysis.executionIntent;
  const signals = analysis.signals;
  const requestedOperation =
    ei && "requestedOperation" in ei && typeof ei.requestedOperation === "string"
      ? ei.requestedOperation.trim() || null
      : analysis.requestedOperation?.trim() || null;
  const revFromEi =
    ei &&
    "reversibilityExpectation" in ei &&
    (ei.reversibilityExpectation === "reversible" ||
      ei.reversibilityExpectation === "irreversible" ||
      ei.reversibilityExpectation === "unknown")
      ? ei.reversibilityExpectation
      : null;
  return {
    objective,
    expectedOutcome,
    scopeNarrative,
    scopeIn: ei?.scopeIn ?? [],
    scopeOut: analysis.outOfScope ?? [],
    materiality: input.materiality,
    repositoryBindingIdentity: input.repositoryBindingIdentity,
    pathRoot: input.pathRoot,
    requiredCapabilities: [...input.requiredCapabilities],
    expectedOutputs: [expectedOutcome],
    intentKind: ei?.intentKind?.trim() || null,
    artifactType: ei?.artifactType?.trim() || null,
    requestedOperation,
    reversibilityExpectation:
      revFromEi ??
      (signals?.irreversible === true
        ? "irreversible"
        : signals?.irreversible === false
          ? "reversible"
          : "unknown"),
    stopConditions: [
      ...(analysis.stopConditions ?? []).filter((s) => s.trim()),
      "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
    ],
    risks: [...(analysis.risks ?? [])],
    reservations: [...(analysis.reservations ?? [])],
    impactSignals: {
      structuralChange: Boolean(signals?.structuralChange),
      securityImpact: Boolean(signals?.securityImpact),
      architectureImpact: Boolean(signals?.architectureImpact),
      dataImpact: Boolean(signals?.dataImpact),
      irreversible: Boolean(signals?.irreversible),
    },
    cycleInstanceId: input.cycleInstanceId,
  };
}

async function loadAndValidateAcceptedGenericMissionHd(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
}): Promise<VerifyGenericMissionHumanDecisionResult> {
  const decisionId = input.decisionId.trim();
  if (!decisionId.startsWith("dec:")) {
    return {
      ok: false,
      code: "HD_ABSENT",
      message: "decisionId invalide — HumanDecision absente.",
    };
  }

  const loaded = await input.oa.decisionServices.getHumanDecision.execute({
    decisionId,
  });
  if (!loaded.ok) {
    return {
      ok: false,
      code: "HD_ABSENT",
      message: "HumanDecision introuvable via OA.",
    };
  }
  const decision = loaded.decision;

  if (decision.status === "superseded") {
    return {
      ok: false,
      code: "HD_SUPERSEDED",
      message: "HumanDecision superseded — reprise refusée.",
    };
  }
  if (decision.status === "revoked") {
    return {
      ok: false,
      code: "HD_REVOKED",
      message: "HumanDecision revoked — reprise refusée.",
    };
  }
  if (decision.status === "refused") {
    return {
      ok: false,
      code: "HD_REFUSED",
      message: "HumanDecision refusée — PREPARE non autorisé.",
    };
  }
  if (decision.status === "amended") {
    return {
      ok: false,
      code: "HD_AMEND_REQUIRES_NEW_PRESENTATION",
      message:
        "Option request-amend — nouvelle présentation requise avant acceptation.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "HD_REFUSED",
      message: `Statut HumanDecision ${decision.status} — reprise refusée.`,
    };
  }

  if (decision.projectId !== input.projectId.trim()) {
    return {
      ok: false,
      code: "HD_PROJECT_MISMATCH",
      message: "HumanDecision d'un autre Project.",
    };
  }

  if (decision.authority !== "pilot") {
    return {
      ok: false,
      code: "HD_AUTHORITY_INVALID",
      message: "Autorité Pilote requise pour mission générique structurante.",
    };
  }

  const basis = decision.decisionBasis;
  if (!basis || basis.sourceType !== "generic_mission") {
    return {
      ok: false,
      code: "HD_SOURCE_TYPE_INVALID",
      message: "DecisionBasis.sourceType generic_mission requis.",
    };
  }

  const basisViolation = validateDecisionBasis(basis);
  if (basisViolation) {
    return {
      ok: false,
      code: "HD_BASIS_INVALID",
      message: `DecisionBasis invalide: ${basisViolation.reason}`,
    };
  }

  const ctx = basis.genericMissionContext!;
  if (decision.subject.trim() !== ctx.missionSubjectId) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "Sujet HumanDecision ≠ missionSubjectId scellé.",
    };
  }
  // Accepted authority options: ACCEPT_PREPARE (historical PREPARE-gate) or
  // AUTHORIZE_INSPECTED_EXECUTE (D-P6-SHE-01 Exécuter). Callers that require
  // PREPARE specifically re-assert ACCEPT_PREPARE after this load.
  if (
    !isGenericMissionAcceptedAuthorityOption(decision.selectedOptionId) ||
    !isGenericMissionAcceptedAuthorityOption(ctx.selectedOptionRef) ||
    decision.selectedOptionId !== ctx.selectedOptionRef
  ) {
    return {
      ok: false,
      code: "HD_REFUSED",
      message:
        "Option d'autorité acceptée absente ou incohérente — reprise refusée.",
    };
  }

  const integrity = verifyGenericMissionSnapshotIntegrity({ basis });
  if (!integrity.ok) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: `Intégrité du sceau durable échouée (${integrity.reason}).`,
    };
  }

  return {
    ok: true,
    verified: {
      decisionId: decision.decisionId,
      decision,
      missionSubjectId: ctx.missionSubjectId,
      presentationDigest: ctx.presentationDigest,
    },
  };
}

async function evaluateLpsCurrentness(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly sealedLpsVersion: number;
  readonly sealedDoctrineDigest?: string;
  readonly decisionId: string;
}): Promise<VerifyGenericMissionHumanDecisionResult | { readonly ok: true }> {
  const currentLps =
    await input.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
  if (!currentLps.ok) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "LPS courant indisponible pour currentness.",
    };
  }

  const sealedLps =
    await input.oa.projectServices.getLivingProjectStateVersion.execute({
      projectId: input.projectId,
      version: input.sealedLpsVersion,
    });
  if (!sealedLps.ok) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "LPS scellé indisponible — transition non qualifiable.",
    };
  }

  const sealedSnap = lpsSnapshotFromState(sealedLps.livingProjectState);
  // Prefer sealed proposalContext doctrineDigest when LPS payload lacks it.
  const sealedWithDoctrine: LpsMaterialSnapshot = {
    ...sealedSnap,
    doctrineDigest:
      sealedSnap.doctrineDigest ||
      input.sealedDoctrineDigest?.trim() ||
      "",
  };
  const currentSnap = lpsSnapshotFromState(currentLps.livingProjectState);
  const currentWithDoctrine: LpsMaterialSnapshot = {
    ...currentSnap,
    doctrineDigest:
      currentSnap.doctrineDigest ||
      input.sealedDoctrineDigest?.trim() ||
      "",
  };

  const lpsEval = evaluateLpsTransitionAfterHumanDecision({
    sealed: sealedWithDoctrine,
    current: currentWithDoctrine,
    decisionId: input.decisionId,
  });
  if (!lpsEval.ok) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: `Transition LPS non légitime (${lpsEval.reason}).`,
    };
  }
  return { ok: true };
}

function effectsMismatchCode(reason: string): string {
  if (
    reason === "scope_arrays_drift" ||
    reason === "scope_narrative_drift" ||
    reason === "scope_narrative_mismatch" ||
    reason === "scope_arrays_mismatch"
  ) {
    return "HD_SCOPE_MISMATCH";
  }
  if (
    reason === "capabilities_drift" ||
    reason === "impact_signals_drift" ||
    reason === "intent_kind_drift" ||
    reason === "artifact_type_drift" ||
    reason === "requested_operation_drift" ||
    reason === "expected_outputs_drift" ||
    reason === "reversibility_drift" ||
    reason === "stop_conditions_drift" ||
    reason === "risks_drift" ||
    reason === "reservations_drift" ||
    reason === "intent_kind_mismatch" ||
    reason === "artifact_type_mismatch" ||
    reason === "requested_operation_mismatch" ||
    reason === "expected_outputs_mismatch" ||
    reason === "capabilities_mismatch" ||
    reason === "stop_conditions_missing" ||
    reason === "reversibility_expectation_mismatch" ||
    reason === "oa_reversibility_mismatch" ||
    reason === "risks_missing" ||
    reason === "reservations_missing" ||
    reason === "materiality_mismatch" ||
    reason === "materiality_degraded" ||
    reason === "materiality_absent"
  ) {
    return "HD_EFFECTS_MISMATCH";
  }
  if (
    reason === "objective_drift" ||
    reason === "expected_outcome_drift" ||
    reason === "objective_mismatch" ||
    reason === "expected_outcome_mismatch" ||
    reason === "mission_subject_id_mismatch" ||
    reason === "mission_subject_id_absent" ||
    reason === "decision_ref_absent" ||
    reason === "cycle_mismatch"
  ) {
    return "HD_MISSION_MISMATCH";
  }
  if (
    reason === "repository_binding_drift" ||
    reason === "path_root_drift" ||
    reason === "repository_binding_mismatch" ||
    reason === "path_root_mismatch" ||
    reason === "presentation_digest_absent" ||
    reason === "presentation_digest_mismatch" ||
    reason === "ec_status_not_reusable"
  ) {
    return "HD_SUBJECT_STALE";
  }
  return "HD_SUBJECT_STALE";
}

export async function verifyGenericMissionHumanDecisionForPrepare(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly decisionId: string;
  readonly analysis: IntentAnalysisDto;
}): Promise<VerifyGenericMissionHumanDecisionResult> {
  const base = await loadAndValidateAcceptedGenericMissionHd({
    oa: input.oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
  });
  if (!base.ok) return base;

  const decision = base.verified.decision;
  const basis = decision.decisionBasis!;
  const ctx = basis.genericMissionContext!;

  // PREPARE path — only ACCEPT_PREPARE unblocks. SHE authorize-execute is not
  // a substitute for the historical PREPARE-gate option.
  if (
    decision.selectedOptionId !== GENERIC_MISSION_OPTION_ACCEPT_PREPARE ||
    ctx.selectedOptionRef !== GENERIC_MISSION_OPTION_ACCEPT_PREPARE
  ) {
    return {
      ok: false,
      code: "HD_REFUSED",
      message: "Option accept-prepare absente — PREPARE non débloqué.",
    };
  }

  const expectedCycle = input.cycleInstanceId?.trim() || null;
  const sealedCycle = ctx.cycleInstanceId ?? null;
  if (expectedCycle !== sealedCycle) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "cycleInstanceId incompatible avec la mission scellée.",
    };
  }

  const lpsOk = await evaluateLpsCurrentness({
    oa: input.oa,
    projectId: input.projectId,
    sealedLpsVersion: basis.proposalContext.lpsVersion,
    sealedDoctrineDigest: basis.proposalContext.doctrineDigest,
    decisionId: decision.decisionId,
  });
  if (!lpsOk.ok) return lpsOk;

  const materialityResolution = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis: input.analysis,
    cycleInstanceId: input.cycleInstanceId,
  });
  if (!materialityResolution.liveReadOk) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "Requalification Product impossible — reprise refusée.",
    };
  }
  const currentness = materialityResolution.facts.productCurrentness;
  if (!currentness) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "Currentness Product absente — reprise refusée.",
    };
  }

  const proposedCapabilities =
    input.analysis.executionIntent?.requiredCapabilities ?? [];
  const capabilityResolution =
    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
  if (!capabilityResolution.ok) {
    return {
      ok: false,
      code: "HD_EFFECTS_MISMATCH",
      message: "Capacités courantes hors enveloppe — reprise refusée.",
    };
  }

  const current = buildCurrentMaterialFromAnalysis({
    analysis: input.analysis,
    materiality: materialityResolution.assessment.materiality,
    repositoryBindingIdentity: currentness.repositoryIdentity,
    pathRoot: currentness.pathRoot,
    requiredCapabilities: capabilityResolution.contractCapabilities,
    cycleInstanceId: expectedCycle,
  });

  const material = materialCurrentnessMatch({ sealed: ctx, current });
  if (!material.ok) {
    return {
      ok: false,
      code: effectsMismatchCode(material.reason),
      message: `Faits Product courants incompatibles avec la mission scellée (${material.reason}).`,
    };
  }

  return base;
}

/**
 * CR-03 — read-only currentness of a generic_mission HD against an EC.
 * Used at Confirm/Authorize. Never builds contracts. Never skips via refs length.
 */
export async function verifyGenericMissionHumanDecisionForContract(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
  readonly contract: ExecutionContract;
}): Promise<VerifyGenericMissionHumanDecisionResult> {
  const base = await loadAndValidateAcceptedGenericMissionHd({
    oa: input.oa,
    projectId: input.projectId,
    decisionId: input.decisionId,
  });
  if (!base.ok) return base;

  const decision = base.verified.decision;
  const basis = decision.decisionBasis!;
  const ctx = basis.genericMissionContext!;
  const contract = input.contract;

  if (contract.projectId !== input.projectId.trim()) {
    return {
      ok: false,
      code: "HD_PROJECT_MISMATCH",
      message: "EC Project mismatch.",
    };
  }

  const refs = contract.decisionRefs ?? [];
  if (!refs.includes(decision.decisionId)) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "decisionId absent des decisionRefs du contrat.",
    };
  }

  const contractCycle = contract.cycleInstanceId?.trim() || null;
  const sealedCycle = ctx.cycleInstanceId ?? null;
  if (contractCycle !== sealedCycle) {
    return {
      ok: false,
      code: "HD_MISSION_MISMATCH",
      message: "cycleInstanceId EC incompatible avec la mission scellée.",
    };
  }

  // Closed cycle bound to EC → refuse.
  if (contractCycle) {
    const cycleServices = input.oa.cycleServices;
    if (!cycleServices?.getCycle) {
      return {
        ok: false,
        code: "HD_SUBJECT_STALE",
        message: "Services cycle indisponibles pour valider le cycle lié.",
      };
    }
    const cycle = await cycleServices.getCycle.execute({
      cycleInstanceId: contractCycle,
    });
    if (!cycle.ok) {
      return {
        ok: false,
        code: "CYCLE_NOT_ACTIVE",
        message: "Cycle lié introuvable — Confirm/Authorize refusé.",
      };
    }
    const status = cycle.cycle.status;
    if (
      status === "completed" ||
      status === "cancelled" ||
      status === "superseded"
    ) {
      return {
        ok: false,
        code: "CYCLE_NOT_ACTIVE",
        message: `Cycle lié ${status} — Confirm/Authorize refusé.`,
      };
    }
    if (cycle.cycle.projectId !== input.projectId.trim()) {
      return {
        ok: false,
        code: "HD_PROJECT_MISMATCH",
        message: "Cycle lié à un autre Project.",
      };
    }
  }

  const lpsOk = await evaluateLpsCurrentness({
    oa: input.oa,
    projectId: input.projectId,
    sealedLpsVersion: basis.proposalContext.lpsVersion,
    sealedDoctrineDigest: basis.proposalContext.doctrineDigest,
    decisionId: decision.decisionId,
  });
  if (!lpsOk.ok) return lpsOk;

  const contractInputs = (contract.inputs ?? {}) as Record<string, unknown>;

  // Bloc A — dual representations must agree (no silent favorable pick).
  const internal = assertExecutionContractInternalConsistency({
    constraints: contract.constraints,
    inputs: contractInputs,
  });
  if (!internal.ok) {
    return {
      ok: false,
      code: "HD_EFFECTS_MISMATCH",
      message: `EC représentation interne incohérente (${internal.reason}).`,
    };
  }

  // Independent EC projection (native OA + stamped inputs) vs sealed HD.
  const ecProjection = projectExecutionContractEffects({
    projectId: contract.projectId,
    cycleInstanceId: contract.cycleInstanceId,
    decisionRefs: contract.decisionRefs,
    status: contract.status,
    version: contract.version,
    semanticFingerprint: contract.semanticFingerprint,
    expectedOutputs: contract.expectedOutputs,
    requiredCapabilities: contract.requiredCapabilities,
    stopConditions: contract.stopConditions,
    reversibility: contract.reversibility as OaReversibility,
    constraints: contract.constraints,
    inputs: contractInputs,
  });
  const ecHd = compareExecutionContractToSealedHumanDecision({
    sealed: ctx,
    ec: ecProjection,
    decisionId: decision.decisionId,
  });
  if (!ecHd.ok) {
    return {
      ok: false,
      code: effectsMismatchCode(ecHd.reason),
      message: `EC↔HD binding refusé (${ecHd.reason}).`,
    };
  }

  // Historical contract impact signals (stamped on EC / sealed HD).
  // These are NOT claimed as a live Nora re-qualification — they are the
  // accepted mission facts carried by the EC/HD. Product-owned facts
  // (LPS, repo binding, protected paths, pathRoot) are read live below.
  const materialityFacts = (contractInputs.materialityFacts ?? null) as
    | {
        modelSignals?: {
          structuralChange?: boolean;
          securityImpact?: boolean;
          architectureImpact?: boolean;
          dataImpact?: boolean;
          irreversible?: boolean;
        } | null;
      }
    | null;
  const stampedImpact =
    (contractInputs.impactSignals as
      | {
          structuralChange?: boolean;
          securityImpact?: boolean;
          architectureImpact?: boolean;
          dataImpact?: boolean;
          irreversible?: boolean;
        }
      | undefined) ?? null;
  const historicalSignals =
    materialityFacts?.modelSignals ??
    stampedImpact ??
    (ctx.impactSignals
      ? {
          structuralChange: ctx.impactSignals.structuralChange,
          securityImpact: ctx.impactSignals.securityImpact,
          architectureImpact: ctx.impactSignals.architectureImpact,
          dataImpact: ctx.impactSignals.dataImpact,
          irreversible: ctx.impactSignals.irreversible,
        }
      : null);

  const live = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis: {
      parseOk: true,
      intentClass: "execution_request",
      candidateCycleTypeId: null,
      // Historical sealed/stamped signals — never nullled to force non_structural.
      signals: historicalSignals,
      cognitiveWorkload: null,
      contradictionCandidate: null,
      challengeResponseAssessment: "sufficient",
      objective: ecProjection.objective || ctx.objective,
      scope: ecProjection.scopeNarrative || ctx.scopeNarrative,
      rephrasedRequest: ecProjection.objective || ctx.objective,
      outOfScope: [...ecProjection.scopeOut],
      risks: [...ecProjection.risks],
      reservations: [...ecProjection.reservations],
      stopConditions: [...ecProjection.stopConditions],
      activatedBlocks: [],
      expectedOutcome: ecProjection.expectedOutcome || ctx.expectedOutcome,
      criticalJustification: null,
      requestedOperation: ecProjection.requestedOperation,
      executionIntent: {
        intentKind: ecProjection.intentKind,
        artifactType: ecProjection.artifactType,
        scopeIn: [...ecProjection.scopeIn],
        requiredCapabilities: [...ecProjection.requiredCapabilities],
        requestedOperation: ecProjection.requestedOperation,
        reversibilityExpectation: ecProjection.reversibilityExpectation,
      },
    } as IntentAnalysisDto,
    cycleInstanceId: sealedCycle,
  });
  if (!live.liveReadOk || !live.facts.productCurrentness) {
    return {
      ok: false,
      code: "MATERIALITY_PRODUCT_CONTEXT_UNAVAILABLE",
      message: "Currentness Product indisponible — matérialité non requalifiable.",
    };
  }
  const binding = live.facts.productCurrentness;
  if (binding.repositoryIdentity !== ctx.repositoryBindingIdentity) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "Repository binding courant incompatible avec la HD scellée.",
    };
  }
  if (binding.pathRoot !== ctx.pathRoot) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "pathRoot courant incompatible avec la HD scellée.",
    };
  }

  // Bloc B — CURRENT Product materiality continuity for structural+HD.
  // assessExecutionMaterialityOrUnknown forces UNKNOWN whenever
  // productContextSufficient is false — including when historical structural
  // signals are present (basis ≠ non_structural-only). That UNKNOWN gate is
  // for empty-refs NON_STRUCTURAL. Here we recompute class from Product-owned
  // facts + historical sealed/stamped signals (not a live Nora re-qualification).
  if (historicalSignals == null && !live.productContextSufficient) {
    return {
      ok: false,
      code: "MATERIALITY_UNKNOWN",
      message:
        "Matérialité Product courante indéterminée — Confirm/Authorize refusé.",
    };
  }
  // Product WHERE breakage (paths outside current root) is a currentness failure
  // even when sealed pathRoot string still matched a stale stamp race.
  if ((live.facts.pathsOutsidePathRoot ?? []).length > 0) {
    return {
      ok: false,
      code: "MATERIALITY_CURRENT_MISMATCH",
      message:
        "Périmètre mission hors pathRoot Product courant — matérialité non applicable.",
    };
  }

  const recomputed = assessExecutionMateriality({
    modelSignals: historicalSignals,
    contradictionConflictPresent: live.facts.contradictionConflictPresent,
    currentContradictionUnresolved: live.facts.currentContradictionUnresolved,
    protectedPathHits: live.facts.protectedPathHits,
    wouldMutateStructuralProjectTruth:
      live.facts.wouldMutateStructuralProjectTruth,
    wouldMutateCycleOrTrajectoryTruth:
      live.facts.wouldMutateCycleOrTrajectoryTruth,
    authorityEnvelopeExpanded: live.facts.authorityEnvelopeExpanded,
  });
  const currentMateriality = recomputed.materiality;
  const vsHd = materialityContinuityCompatible({
    sealed: ctx.materiality,
    current: currentMateriality,
  });
  if (!vsHd.ok) {
    return {
      ok: false,
      code: "MATERIALITY_CURRENT_MISMATCH",
      message: `Matérialité Product courante (${currentMateriality}) incompatible avec le sceau HD (${ctx.materiality}) — ${vsHd.reason}.`,
    };
  }
  if (ecProjection.materiality != null) {
    const vsEc = materialityContinuityCompatible({
      sealed: ecProjection.materiality,
      current: currentMateriality,
    });
    if (!vsEc.ok) {
      return {
        ok: false,
        code: "MATERIALITY_CURRENT_MISMATCH",
        message: `Matérialité Product courante (${currentMateriality}) incompatible avec l'EC (${ecProjection.materiality}) — ${vsEc.reason}.`,
      };
    }
  }

  return base;
}
