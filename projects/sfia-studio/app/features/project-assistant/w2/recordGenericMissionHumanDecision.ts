/**
 * M-HD-01 — present + record Pilote HumanDecision on a sealed Generic Mission.
 *
 * PREPARE / AUTHORIZE / EXECUTE are never performed here.
 * No Attempt. No fabricated decision. Refuse ≠ GO. Amend requires new seal.
 */

import { randomBytes } from "node:crypto";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type HumanDecision,
  type OaActorReference,
} from "@/lib/oa/decision";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { resolveAuthoritativeProductMateriality } from "./resolveAuthoritativeProductMateriality";
import { resolveGenericPrepareCapabilityEnvelope } from "./genericPrepareCapabilityEnvelope";
import type { IntentAnalysisDto } from "../f2/types";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
  buildGenericMissionSubject,
  decisionBasisFromGenericMissionSubject,
  isGenericMissionAcceptedAuthorityOption,
  labelForGenericMissionOption,
  projectExecutionContractEffects,
  resolveGenericMissionPresentedOptions,
  type GenericMissionEffectsSeal,
  type GenericMissionImpactSignals,
  type GenericMissionSubject,
} from "./genericMissionSubject";
import {
  assessApplicableGenericMissionDecision,
  lpsMaterialSnapshotFromLivingProjectState,
} from "./genericMissionDecisionApplicability";
import type { LpsMaterialSnapshot } from "./genericMissionSubject";

/**
 * Authenticated Pilote for Product Record — actor must come from
 * resolveCurrentAuthenticatedPilote (server session). Client claims ignored.
 */
export type AuthenticatedPiloteForMissionDecision = {
  readonly actor: OaActorReference;
  readonly githubUserId?: string;
};

export type SealGenericMissionForPresentationInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  readonly analysis: IntentAnalysisDto;
  /** Reuse existing occurrence id on amend re-presentation only when material unchanged. */
  readonly missionSubjectId?: string;
  /**
   * D-P6-SHE-01 — when set, seals these optionRefs (e.g. authorize-inspected-execute)
   * instead of the default ACCEPT_PREPARE presentation set.
   */
  readonly optionRefs?: readonly string[];
  /** Optional effect / impact overrides so EC↔HD binding stays exact (SHE). */
  readonly effectsOverride?: GenericMissionEffectsSeal;
  readonly impactSignalsOverride?: GenericMissionImpactSignals;
  readonly objectiveOverride?: string;
  readonly expectedOutcomeOverride?: string;
  readonly scopeNarrativeOverride?: string;
  readonly scopeInOverride?: readonly string[];
  readonly scopeOutOverride?: readonly string[];
};

export type SealGenericMissionForPresentationResult =
  | {
      readonly ok: true;
      readonly subject: GenericMissionSubject;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    };

export async function sealGenericMissionForPresentation(
  input: SealGenericMissionForPresentationInput,
): Promise<SealGenericMissionForPresentationResult> {
  const fail = (
    code: string,
    message: string,
  ): SealGenericMissionForPresentationResult => ({
    ok: false,
    code,
    message,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  });

  const projectId = input.projectId.trim();
  if (!projectId) {
    return fail("PRODUCT_PROJECT_REQUIRED", "Project requis.");
  }

  const materialityResolution = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId,
    analysis: input.analysis,
    cycleInstanceId: input.cycleInstanceId,
  });
  if (!materialityResolution.liveReadOk) {
    return fail(
      materialityResolution.failureCode ?? "PRODUCT_CONTEXT_UNAVAILABLE",
      "Contexte Product insuffisant pour sceller la mission.",
    );
  }
  const currentness = materialityResolution.facts.productCurrentness;
  if (!currentness) {
    return fail(
      "PRODUCT_CURRENTNESS_UNAVAILABLE",
      "Ancres LPS / doctrine indisponibles pour le sceau.",
    );
  }

  const proposedCapabilities =
    input.analysis.executionIntent?.requiredCapabilities ?? [];
  const capabilityResolution =
    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
  if (!capabilityResolution.ok) {
    return fail(
      capabilityResolution.code,
      `Capacités hors enveloppe — sceau refusé : ${capabilityResolution.elevated.join(", ")}.`,
    );
  }

  const objective = (
    input.objectiveOverride ??
    input.analysis.objective ??
    input.analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (
    input.expectedOutcomeOverride ??
    input.analysis.expectedOutcome ??
    objective
  ).trim();
  const scopeNarrative = (
    input.scopeNarrativeOverride ??
    input.analysis.scope ??
    expectedOutcome
  ).trim();
  if (!objective || (!expectedOutcome && !scopeNarrative)) {
    return fail(
      "MISSION_INSUFFICIENTLY_QUALIFIED",
      "Objectif / résultat attendu insuffisants pour présentation Pilote.",
    );
  }

  // Nora path/filename candidates stay non-authoritative — never sealed as destinations.
  const ei = input.analysis.executionIntent;
  const authoritativeExpectedOutputs = [expectedOutcome];
  const requestedOperation =
    ei && "requestedOperation" in ei && typeof ei.requestedOperation === "string"
      ? ei.requestedOperation.trim() || null
      : input.analysis.requestedOperation?.trim() || null;

  const signals = input.analysis.signals;
  const revFromEi =
    ei &&
    "reversibilityExpectation" in ei &&
    (ei.reversibilityExpectation === "reversible" ||
      ei.reversibilityExpectation === "irreversible" ||
      ei.reversibilityExpectation === "unknown")
      ? ei.reversibilityExpectation
      : null;
  const defaultEffects: GenericMissionEffectsSeal = {
    intentKind: ei?.intentKind?.trim() || null,
    artifactType: ei?.artifactType?.trim() || null,
    requestedOperation,
    requiredCapabilities: [...capabilityResolution.contractCapabilities],
    expectedOutputs: authoritativeExpectedOutputs,
    reversibilityExpectation:
      revFromEi ??
      (signals?.irreversible === true
        ? "irreversible"
        : signals?.irreversible === false
          ? "reversible"
          : "unknown"),
    stopConditions: [
      ...(input.analysis.stopConditions ?? []).filter((s) => s.trim()),
      "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
    ],
    risks: [...(input.analysis.risks ?? [])],
    reservations: [...(input.analysis.reservations ?? [])],
  };
  const defaultImpact: GenericMissionImpactSignals = {
    structuralChange: Boolean(signals?.structuralChange),
    securityImpact: Boolean(signals?.securityImpact),
    architectureImpact: Boolean(signals?.architectureImpact),
    dataImpact: Boolean(signals?.dataImpact),
    irreversible: Boolean(signals?.irreversible),
  };
  if (input.optionRefs) {
    for (const ref of input.optionRefs) {
      if (!labelForGenericMissionOption(ref)) {
        return fail(
          "HD_OPTION_UNKNOWN",
          `Option de présentation inconnue: ${ref}`,
        );
      }
    }
  }
  const subject = buildGenericMissionSubject({
    missionSubjectId: input.missionSubjectId,
    projectId,
    cycleInstanceId: input.cycleInstanceId?.trim() || null,
    objective,
    expectedOutcome,
    scopeNarrative,
    scopeIn: input.scopeInOverride
      ? [...input.scopeInOverride]
      : (ei?.scopeIn ?? []),
    scopeOut: input.scopeOutOverride
      ? [...input.scopeOutOverride]
      : (input.analysis.outOfScope ?? []),
    materiality: materialityResolution.assessment.materiality,
    materialityReasonCodes: materialityResolution.assessment.reasonCodes,
    repositoryBindingIdentity: currentness.repositoryIdentity,
    pathRoot: currentness.pathRoot,
    effects: input.effectsOverride ?? defaultEffects,
    impactSignals: input.impactSignalsOverride ?? defaultImpact,
    lpsId: currentness.lpsId,
    lpsVersion: currentness.lpsVersion,
    doctrineDigest: currentness.doctrineDigest,
    ...(input.optionRefs && input.optionRefs.length > 0
      ? { optionRefs: [...input.optionRefs] }
      : {}),
    presentedAtIso: input.oa.clock.nowIso(),
  });

  return {
    ok: true,
    subject,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  };
}

/**
 * D-P6-SHE-01 GAP-04 — AUTHORIZE_INSPECTED_EXECUTE must bind to an OA EC
 * identity. Server reloads and projects effects; subject field overrides alone
 * are never authority.
 */
export type SheInspectedExecutionContractBinding = {
  readonly executionContractId: string;
  readonly expectedVersion: number;
  readonly expectedSemanticFingerprint: string;
};

export type RecordGenericMissionHumanDecisionInput = {
  readonly oa: RuntimeOaStack;
  readonly subject: GenericMissionSubject;
  readonly selectedOptionId: string;
  /**
   * CR-02 — server re-seals from this analysis + Product facts; caller subject
   * digest must match. Client-only subject is not authority.
   */
  readonly analysis: IntentAnalysisDto;
  /**
   * Product path — session-bound Pilote. Required unless forceLocalAuthority
   * (tests only). Never accept a client-forged ActorReference as authority.
   */
  readonly authenticatedPilote?: AuthenticatedPiloteForMissionDecision;
  /** Test inject only — never on real Product Record path (A7). */
  readonly forceLocalAuthority?: boolean;
  readonly rationale?: string;
  readonly supersedeExistingAccepted?: boolean;
  /** When true (default), link accepted HD into LPS (legitimate version bump). */
  readonly linkToLivingProjectState?: boolean;
  /**
   * Digest of the presentation the Pilote actually saw (client/UI).
   * When omitted, defaults to subject.presentationDigest.
   * Used to recognize normal LPS-bump replay without inventing a new HD.
   */
  readonly presentedPresentationDigest?: string;
  /**
   * Required when selectedOptionId is AUTHORIZE_INSPECTED_EXECUTE.
   * Effects for re-seal are projected from this OA contract, not from subject.
   */
  readonly sheInspectedExecutionContract?: SheInspectedExecutionContractBinding;
};

export type RecordGenericMissionHumanDecisionResult =
  | {
      readonly ok: true;
      readonly decision: HumanDecision;
      readonly humanDecisionCreated: boolean;
      readonly executionAttemptCreated: false;
      readonly code:
        | "GENERIC_MISSION_HUMAN_DECISION_RECORDED"
        | "GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED";
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    };

export async function recordGenericMissionHumanDecision(
  input: RecordGenericMissionHumanDecisionInput,
): Promise<RecordGenericMissionHumanDecisionResult> {
  const fail = (
    code: string,
    message: string,
  ): RecordGenericMissionHumanDecisionResult => ({
    ok: false,
    code,
    message,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  });

  const selected = input.selectedOptionId.trim();
  // Presented options are those sealed on the subject (SHE may present
  // authorize-inspected-execute instead of accept-prepare).
  const presentedIds = new Set(input.subject.optionRefs);
  if (!presentedIds.has(selected) || !labelForGenericMissionOption(selected)) {
    return fail(
      "HD_OPTION_NOT_PRESENTED",
      "Option Pilote hors ensemble présenté — décision refusée.",
    );
  }

  // Self-consistency of caller subject (digest over its own fields).
  const selfCheck = buildGenericMissionSubject({
    missionSubjectId: input.subject.missionSubjectId,
    projectId: input.subject.projectId,
    cycleInstanceId: input.subject.cycleInstanceId,
    objective: input.subject.objective,
    expectedOutcome: input.subject.expectedOutcome,
    scopeNarrative: input.subject.scopeNarrative,
    scopeIn: input.subject.scopeIn,
    scopeOut: input.subject.scopeOut,
    materiality: input.subject.materiality,
    materialityReasonCodes: input.subject.materialityReasonCodes,
    repositoryBindingIdentity: input.subject.repositoryBindingIdentity,
    pathRoot: input.subject.pathRoot,
    effects: input.subject.effects,
    impactSignals: input.subject.impactSignals,
    lpsId: input.subject.lpsId,
    lpsVersion: input.subject.lpsVersion,
    doctrineDigest: input.subject.doctrineDigest,
    optionRefs: input.subject.optionRefs,
    presentedAtIso: input.subject.presentedAtIso,
  });
  if (selfCheck.presentationDigest !== input.subject.presentationDigest) {
    return fail(
      "HD_SUBJECT_DIGEST_MISMATCH",
      "Sceau de présentation incohérent — enregistrement refusé.",
    );
  }

  // CR-02 — Product-qualified re-seal; forged subject with recomputed digest fails.
  const projectOk = await input.oa.projectServices.getProject.execute({
    projectId: input.subject.projectId,
  });
  if (!projectOk.ok) {
    return fail("PRODUCT_PROJECT_REQUIRED", "Project introuvable pour Record.");
  }
  // CR-02 — Product-qualified re-seal from analysis + CURRENT Product.
  // Default ACCEPT_PREPARE: never trust subject field overrides
  // (forged objective + recomputed digest must diverge → HD_SUBJECT_STALE).
  // SHE AUTHORIZE_INSPECTED_EXECUTE (GAP-04): require OA EC binding; project
  // effects from the inspected contract — never from subject overrides alone.
  const sheAuthorizePresentation =
    selected === GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE &&
    input.subject.optionRefs.includes(
      GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
    );

  let sheEffectsFromOa: {
    effectsOverride: GenericMissionEffectsSeal;
    objectiveOverride: string;
    expectedOutcomeOverride: string;
    scopeNarrativeOverride: string;
    scopeInOverride: readonly string[];
    scopeOutOverride: readonly string[];
  } | null = null;

  if (sheAuthorizePresentation) {
    const bind = input.sheInspectedExecutionContract;
    if (
      !bind ||
      !bind.executionContractId.trim() ||
      !Number.isFinite(bind.expectedVersion) ||
      !bind.expectedSemanticFingerprint.trim()
    ) {
      return fail(
        "SHE_INSPECTED_CONTRACT_BINDING_REQUIRED",
        "AUTHORIZE_INSPECTED_EXECUTE exige le binding OA du contrat inspecté — Record refusé.",
      );
    }
    const loaded =
      await input.oa.executionContractServices.getExecutionContract.execute({
        executionContractId: bind.executionContractId.trim(),
      });
    if (!loaded.ok) {
      return fail(
        "SHE_INSPECTED_CONTRACT_NOT_FOUND",
        "Contrat inspecté introuvable — Record SHE refusé.",
      );
    }
    const ec = loaded.contract;
    if (ec.projectId !== input.subject.projectId) {
      return fail(
        "SHE_INSPECTED_CONTRACT_PROJECT_MISMATCH",
        "Contrat inspecté hors projet — Record SHE refusé.",
      );
    }
    if (ec.version !== bind.expectedVersion) {
      return fail(
        "SHE_INSPECTED_CONTRACT_VERSION_MISMATCH",
        "Version du contrat inspecté divergente — Record SHE refusé.",
      );
    }
    const fp = ec.semanticFingerprint ?? "";
    if (!fp || fp !== bind.expectedSemanticFingerprint.trim()) {
      return fail(
        "SHE_INSPECTED_CONTRACT_FINGERPRINT_MISMATCH",
        "Empreinte du contrat inspecté divergente — Record SHE refusé.",
      );
    }
    if ((ec.cycleInstanceId ?? null) !== (input.subject.cycleInstanceId ?? null)) {
      return fail(
        "SHE_INSPECTED_CONTRACT_CYCLE_MISMATCH",
        "Cycle du contrat inspecté divergent — Record SHE refusé.",
      );
    }
    const proj = projectExecutionContractEffects({
      projectId: ec.projectId,
      cycleInstanceId: ec.cycleInstanceId ?? null,
      decisionRefs: ec.decisionRefs ?? [],
      status: ec.status,
      version: ec.version,
      semanticFingerprint: ec.semanticFingerprint,
      expectedOutputs: ec.expectedOutputs,
      requiredCapabilities: ec.requiredCapabilities,
      stopConditions: ec.stopConditions,
      reversibility: ec.reversibility as
        | "reversible"
        | "partially_reversible"
        | "irreversible",
      constraints: ec.constraints,
      inputs: (ec.inputs ?? {}) as Record<string, unknown>,
    });
    sheEffectsFromOa = {
      effectsOverride: {
        intentKind: proj.intentKind,
        artifactType: proj.artifactType,
        requestedOperation: proj.requestedOperation,
        requiredCapabilities: [...proj.requiredCapabilities],
        expectedOutputs: [...proj.expectedOutputs],
        reversibilityExpectation: proj.reversibilityExpectation,
        stopConditions: [...proj.stopConditions],
        risks: [...proj.risks],
        reservations: [...proj.reservations],
      },
      objectiveOverride: proj.objective,
      expectedOutcomeOverride: proj.expectedOutcome,
      scopeNarrativeOverride: proj.scopeNarrative,
      scopeInOverride: proj.scopeIn,
      scopeOutOverride: proj.scopeOut,
    };
  }

  const fresh = await sealGenericMissionForPresentation({
    oa: input.oa,
    projectId: input.subject.projectId,
    cycleInstanceId: input.subject.cycleInstanceId,
    analysis: input.analysis,
    missionSubjectId: input.subject.missionSubjectId,
    optionRefs: input.subject.optionRefs,
    ...(sheEffectsFromOa
      ? {
          effectsOverride: sheEffectsFromOa.effectsOverride,
          objectiveOverride: sheEffectsFromOa.objectiveOverride,
          expectedOutcomeOverride: sheEffectsFromOa.expectedOutcomeOverride,
          scopeNarrativeOverride: sheEffectsFromOa.scopeNarrativeOverride,
          scopeInOverride: sheEffectsFromOa.scopeInOverride,
          scopeOutOverride: sheEffectsFromOa.scopeOutOverride,
        }
      : {}),
  });
  if (!fresh.ok) {
    return fail(fresh.code, fresh.message);
  }
  const presentedDigest = (
    input.presentedPresentationDigest ?? input.subject.presentationDigest
  ).trim();
  const status = isGenericMissionAcceptedAuthorityOption(selected)
    ? ("accepted" as const)
    : selected === GENERIC_MISSION_OPTION_REFUSE
      ? ("refused" as const)
      : ("amended" as const);

  // M-HD-02 — identical replay (incl. after legitimate LPS link bump) returns durable state.
  const history = await input.oa.decisionServices.listDecisionHistory.execute({
    projectId: input.subject.projectId,
    subject: input.subject.missionSubjectId,
  });
  if (!history.ok) {
    return fail(
      "OA_DECISION_HISTORY_UNREADABLE",
      "Historique OA illisible — Record refusé.",
    );
  }

  const lpsNow = await input.oa.projectServices.getCurrentLivingProjectState.execute({
    projectId: input.subject.projectId,
  });
  const digestDiverged =
    fresh.subject.presentationDigest !== presentedDigest ||
    fresh.subject.presentationDigest !== input.subject.presentationDigest.trim();
  // Fail-closed when digest diverged and LPS cannot prove a linked bump.
  if (!lpsNow.ok && digestDiverged) {
    return fail(
      "LPS_CURRENT_UNREADABLE",
      "État Living Project courant illisible — rejeu / Record refusé.",
    );
  }
  const currentLps: LpsMaterialSnapshot | null = lpsNow.ok
    ? lpsMaterialSnapshotFromLivingProjectState(lpsNow.livingProjectState)
    : null;

  const findAlreadyApplied = (
    decisions: readonly HumanDecision[],
    lps: LpsMaterialSnapshot | null,
  ): HumanDecision | null => {
    for (const prior of decisions) {
      const assessed = assessApplicableGenericMissionDecision({
        decision: prior,
        subject: fresh.subject,
        currentLps: lps,
      });
      if (!assessed.applicable) continue;
      if (
        assessed.decision.selectedOptionId === selected &&
        assessed.decision.status === status
      ) {
        return assessed.decision;
      }
    }
    return null;
  };

  const already = findAlreadyApplied(history.decisions, currentLps);
  if (already) {
    const priorDigest =
      already.decisionBasis?.genericMissionContext?.presentationDigest?.trim() ??
      "";
    // Replay only when the Pilote retries the SAME presented digest.
    // A newly sealed digest (intentional re-presentation / supersede) must not
    // be collapsed into ALREADY_APPLIED merely because LPS still links the prior HD.
    if (priorDigest && priorDigest === presentedDigest) {
      return {
        ok: true,
        decision: already,
        humanDecisionCreated: false,
        executionAttemptCreated: false,
        code: "GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED",
      };
    }
  }

  // No same-presentation replay — digest divergence means stale presentation.
  if (digestDiverged) {
    return fail(
      "HD_SUBJECT_STALE",
      "Sujet présenté divergent des faits Product courants — nouvelle présentation requise.",
    );
  }

  // Gate A — session actor when provided; LOCAL_PILOTE only via forceLocalAuthority (tests).
  const sessionActor = input.authenticatedPilote?.actor;
  if (!sessionActor?.actorId && input.forceLocalAuthority !== true) {
    return fail(
      "AUTHENTICATED_PILOTE_REQUIRED",
      "Session Pilote vérifiée requise pour enregistrer une HumanDecision de mission.",
    );
  }
  if (
    sessionActor?.actorId &&
    input.authenticatedPilote?.githubUserId &&
    !sessionActor.actorId.includes(input.authenticatedPilote.githubUserId)
  ) {
    return fail(
      "PILOTE_ACTOR_IDENTITY_MISMATCH",
      "Acteur OA incohérent avec l'identité de session — enregistrement refusé.",
    );
  }
  const decisionActor: OaActorReference =
    sessionActor ?? LOCAL_PILOTE_ACTOR;

  const scope = `generic-mission:${input.subject.missionSubjectId}`;
  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.oa.authorityResolver,
    scope,
    issuedAt: input.oa.clock.nowIso(),
    actor: decisionActor,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return fail(authority.code, authority.message);
  }

  const decisionBasis = decisionBasisFromGenericMissionSubject({
    subject: input.subject,
    selectedOptionRef: selected,
  });

  const decisionId = `dec:gms:${randomBytes(8).toString("hex")}`;
  const linkLps =
    status === "accepted" && input.linkToLivingProjectState !== false;

  const recorded = await input.oa.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.subject.projectId,
    ...(input.subject.cycleInstanceId
      ? { cycleInstanceId: input.subject.cycleInstanceId }
      : {}),
    subject: input.subject.missionSubjectId,
    options: resolveGenericMissionPresentedOptions(input.subject.optionRefs).map(
      (o) => ({
        optionId: o.optionId,
        label: o.label,
      }),
    ),
    selectedOptionId: selected,
    actor: decisionActor,
    authority: "pilot",
    status,
    reversible: true,
    scope,
    rationale: input.rationale,
    authorityEvidenceId: authority.evidenceId,
    decisionBasis,
    supersedeExistingAccepted: input.supersedeExistingAccepted !== false,
    linkToLivingProjectState: linkLps,
    ...(linkLps ? { expectedLpsVersion: input.subject.lpsVersion } : {}),
  });

  if (!recorded.ok) {
    // Concurrent Record: OA LPS_VERSION_CONFLICT is fail-closed (no orphan HD).
    // Re-read durable history — if the winner already applied the same option,
    // return ALREADY_APPLIED (idempotent retry). Otherwise surface the conflict.
    if (recorded.error.detailCode === "LPS_VERSION_CONFLICT") {
      const hist2 = await input.oa.decisionServices.listDecisionHistory.execute({
        projectId: input.subject.projectId,
        subject: input.subject.missionSubjectId,
      });
      const lps2 =
        await input.oa.projectServices.getCurrentLivingProjectState.execute({
          projectId: input.subject.projectId,
        });
      if (hist2.ok && lps2.ok) {
        const winner = findAlreadyApplied(
          hist2.decisions,
          lpsMaterialSnapshotFromLivingProjectState(lps2.livingProjectState),
        );
        const winnerDigest =
          winner?.decisionBasis?.genericMissionContext?.presentationDigest?.trim() ??
          "";
        if (winner && winnerDigest && winnerDigest === presentedDigest) {
          return {
            ok: true,
            decision: winner,
            humanDecisionCreated: false,
            executionAttemptCreated: false,
            code: "GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED",
          };
        }
      }
    }
    return fail(
      recorded.error.detailCode,
      recorded.error.message ?? "RecordHumanDecision refusé.",
    );
  }

  return {
    ok: true,
    decision: recorded.decision,
    humanDecisionCreated: true,
    executionAttemptCreated: false,
    code: "GENERIC_MISSION_HUMAN_DECISION_RECORDED",
  };
}

export {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_AUTHORIZE_INSPECTED_EXECUTE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
};
