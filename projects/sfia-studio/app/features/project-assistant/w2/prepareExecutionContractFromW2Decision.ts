/**
 * W3-A / FC-08 — native ExecutionContract preparation from qualified W2 context.
 *
 * Nora/Studio composes complete FC-08 build inputs from durable truths.
 * ExecutionContract is the first durable SoT for the execution envelope.
 *
 * NO fixtureSafeM3ResolutionProfile · NO F3 semantic overwrite · NO Morris runtime persona.
 * NO cycle-profile → requiredAuthority · NO HumanDecision.reversible → EC.reversibility.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
} from "@/lib/oa/decision";
import { S1_MAX_TTL_SECONDS } from "@/lib/auth/constants";
import { issueS1AuthorityEvidence } from "@/lib/auth/s1Authority";
import type { ResolveCurrentPiloteResult } from "@/lib/auth/resolveCurrentPilote";
import {
  projectExecutionContractInspectionDisclosure,
  type ExecutionContractInspectionDisclosure,
} from "@/lib/oa/execution-contract";
import type { F2ContextSnapshot } from "../f2/types";
import { loadPresentedOptionSet, parsePresentedOptionSetStatement } from "./presentedOptionSet";
import {
  assertNotF3FixtureSemantics,
  deriveW3AExecutionEnvelope,
} from "./w3aProductExecutionSemantics";
import { deriveActualExecutionWorkFromProductContext } from "./deriveActualExecutionWorkFromProductContext";
import { resolvePostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
import type { ActualExecutionWork } from "./w3aActualExecutionWork";
import type { QualifiedExecutionEffects } from "./w3aQualifiedExecutionEffects";

export type PreparedExecutionContractDto = {
  readonly executionContractId: string;
  readonly version: number;
  readonly status: string;
  readonly action: string;
  readonly target: string;
  readonly scope: string;
  readonly requiredAuthority: string;
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly requiredCapabilities: readonly string[];
  readonly reversibility: string;
  readonly semanticFingerprint: string;
  readonly decisionRefs: readonly string[];
  readonly cycleInstanceId: string;
  readonly effectClass: string;
  readonly effectConfirmationRequired: boolean;
  readonly effectConfirmationLevel: string | null;
  readonly inspectionDisclosure: ExecutionContractInspectionDisclosure;
};

export type PrepareExecutionContractFromW2DecisionResult =
  | {
      readonly ok: true;
      readonly contract: PreparedExecutionContractDto;
      readonly decisionId: string;
      readonly executionPerformed: false;
      readonly attemptCreated: false;
      readonly f3SemanticOverwrite: false;
    }
  | { readonly ok: false; readonly code: string; readonly message: string };

function safeIdSegment(value: string): string {
  return value.replace(/[^a-zA-Z0-9:_-]/g, "").slice(0, 48);
}

/**
 * W3-A cycle binding: Decision / DecisionBasis cycle is required.
 * activeCycleInstanceId may only confirm coherence — never invent a binding.
 */
async function resolveW3ACycleBinding(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionCycleInstanceId: string | null | undefined;
  readonly basisCycleInstanceId: string | null | undefined;
  readonly activeCycleInstanceId: string | null | undefined;
}): Promise<
  | { readonly ok: true; readonly cycleInstanceId: string; readonly cycleProfile: string }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const primary =
    input.decisionCycleInstanceId?.trim() ||
    input.basisCycleInstanceId?.trim() ||
    "";
  if (!primary) {
    return {
      ok: false,
      code: "CYCLE_BINDING_REQUIRED",
      message:
        "W3-A exige un CycleInstance durable lié à la HumanDecision/DecisionBasis — préparation refusée.",
    };
  }

  const cycle = await input.oa.cycleServices.getCycle.execute({
    cycleInstanceId: primary,
  });
  if (!cycle.ok) {
    return {
      ok: false,
      code: "CYCLE_NOT_FOUND",
      message: "CycleInstance lié introuvable — préparation bloquée.",
    };
  }
  if (cycle.cycle.projectId !== input.projectId) {
    return {
      ok: false,
      code: "CYCLE_PROJECT_MISMATCH",
      message: "CycleInstance / projet incohérents.",
    };
  }

  const active = input.activeCycleInstanceId?.trim() || "";
  if (active && active !== primary) {
    // Coherence signal only — do not rebind. Warn via fail-closed when
    // DecisionBasis and active diverge for the W3-A path.
    return {
      ok: false,
      code: "CYCLE_ACTIVE_MISMATCH",
      message:
        "CycleInstance décisionnel ≠ activeCycleInstanceId — cohérence W3-A refusée (pas de fallback silencieux).",
    };
  }

  return {
    ok: true,
    cycleInstanceId: primary,
    cycleProfile: cycle.cycle.profile,
  };
}

export async function prepareExecutionContractFromW2Decision(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly decisionId: string;
  readonly currentContext: F2ContextSnapshot;
  readonly forceLocalAuthority?: boolean;
  /**
   * Authenticated multi-user Pilote from resolveCurrentAuthenticatedPilote.
   * When present (and forceLocalAuthority is not set), S1 is issued via
   * issueS1AuthorityEvidence — never via login alone / never LOCAL_PILOTE.
   */
  readonly authenticatedPilote?: Extract<
    ResolveCurrentPiloteResult,
    { ok: true }
  >;
  /**
   * Optional compat / test operation kind. Product UI no longer sends this.
   * When durable Product context yields a diagnostic mission, client kind is
   * ignored. Hostile high-risk kinds fail closed.
   */
  readonly qualifiedOperationKind?: unknown;
  /** Same product path — optional Nora/test-injected qualified effects. */
  readonly explicitEffects?: QualifiedExecutionEffects;
  readonly forceEffectsUnresolved?: boolean;
}): Promise<PrepareExecutionContractFromW2DecisionResult> {
  const { oa } = input;

  const loaded = await oa.decisionServices.getHumanDecision.execute({
    decisionId: input.decisionId,
  });
  if (!loaded.ok) {
    return {
      ok: false,
      code: loaded.error.detailCode,
      message: loaded.error.message,
    };
  }

  const decision = loaded.decision;
  if (decision.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "La décision n'appartient pas à ce projet.",
    };
  }
  if (decision.status !== "accepted") {
    return {
      ok: false,
      code: "DECISION_NOT_CURRENT",
      message: `Décision ${decision.status} — préparation refusée.`,
    };
  }

  const basis = decision.decisionBasis;
  if (!basis) {
    return {
      ok: false,
      code: "DECISION_BASIS_REQUIRED",
      message: "DecisionBasis manquante — préparation refusée.",
    };
  }

  const ctx = basis.proposalContext;
  if (
    ctx.doctrineDigest !== undefined &&
    ctx.doctrineDigest !== input.currentContext.doctrineDigest
  ) {
    return {
      ok: false,
      code: "CONTEXT_STALE",
      message:
        "DecisionBasis doctrine digest périmé — re-décider avant préparation.",
    };
  }
  if (ctx.lpsVersion > input.currentContext.lpsVersion) {
    return {
      ok: false,
      code: "CONTEXT_STALE",
      message: "DecisionBasis LPS en avance — état incohérent.",
    };
  }

  const traj = basis.trajectoryContext;

  // trajectory_option always requires trajectoryContext; proposal does not.
  if (basis.sourceType === "trajectory_option" && !traj) {
    return {
      ok: false,
      code: "TRAJECTORY_CONTEXT_REQUIRED",
      message:
        "DecisionBasis.trajectoryContext requis pour la préparation W2→W3 (source trajectory_option).",
    };
  }

  // CORR-PROOF-10 — trajectory_option sourceRef IS optionSetRef;
  // proposal sourceRef is proposalId — recover optionSetRef from epistemicRefs
  // (legacy traj context) or by scanning presented Proposal OptionSets.
  let optionSetRef: string | null = null;
  if (basis.sourceType === "trajectory_option") {
    optionSetRef = basis.sourceRef;
  } else if (basis.sourceType === "proposal") {
    for (const ref of traj?.epistemicRefs ?? []) {
      if (ref.startsWith("epi:set-")) {
        optionSetRef = `optset:${ref.slice("epi:set-".length)}`;
        break;
      }
    }
    if (!optionSetRef) {
      const epistemic = await oa.cycleServices.getEpistemicState.execute({
        projectId: input.projectId,
      });
      if (epistemic.ok) {
        for (const item of epistemic.state.items) {
          if (item.type !== "Observation" || item.status !== "active") continue;
          if (!item.relatedObjects?.includes(basis.sourceRef)) continue;
          const parsed = parsePresentedOptionSetStatement(item.statement);
          if (
            parsed &&
            parsed.decisionSubjectMode === "proposal" &&
            parsed.proposalId === basis.sourceRef
          ) {
            optionSetRef = parsed.optionSetRef;
          }
        }
      }
    }
  }
  if (!optionSetRef) {
    return {
      ok: false,
      code: "OPTION_SET_REF_REQUIRED",
      message:
        "Référence OptionSet absente de la DecisionBasis — préparation refusée.",
    };
  }

  const selectedOptionRef =
    basis.sourceType === "proposal"
      ? decision.selectedOptionId
      : traj!.selectedOptionRef;

  if (
    basis.sourceType === "proposal" &&
    selectedOptionRef !== "opt:proposal-subject:pursue"
  ) {
    return {
      ok: false,
      code: "PREPARE_NOT_APPLICABLE",
      message:
        "Préparation EC réservée à la poursuite du sujet Proposal — amend/refuse n'ouvrent pas d'exécution.",
    };
  }

  const presented = await loadPresentedOptionSet(
    oa,
    input.projectId,
    optionSetRef,
  );
  if (!presented.ok) {
    return {
      ok: false,
      code: presented.code,
      message: presented.message,
    };
  }

  if (
    basis.sourceType === "proposal" &&
    (presented.presented.proposalId !== basis.sourceRef ||
      presented.presented.proposalSubjectDigest !== basis.sourceDigest)
  ) {
    return {
      ok: false,
      code: "PROPOSAL_SUBJECT_MISMATCH",
      message:
        "OptionSet présenté ≠ sujet Proposal de la DecisionBasis — fail-closed.",
    };
  }

  const selected = presented.presented.options.find(
    (o) => o.optionRef === selectedOptionRef,
  );
  if (!selected) {
    return {
      ok: false,
      code: "OPTION_NOT_IN_PRESENTED_SET",
      message: "Option sélectionnée absente du OptionSet présenté.",
    };
  }

  const cycleBinding = await resolveW3ACycleBinding({
    oa,
    projectId: input.projectId,
    decisionCycleInstanceId: decision.cycleInstanceId,
    basisCycleInstanceId: basis.cycleInstanceId,
    activeCycleInstanceId: input.currentContext.activeCycleInstanceId,
  });
  if (!cycleBinding.ok) {
    return cycleBinding;
  }

  const project = await oa.projectServices.getProject.execute({
    projectId: input.projectId,
  });
  let projectObjective: string | null = null;
  let projectTitle: string | null = null;
  if (project.ok) {
    projectTitle = project.project.title ?? null;
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: input.projectId,
    });
    if (lps.ok) {
      projectObjective = lps.livingProjectState.objective;
    }
  }

  // Note: cycleProfile is loaded for scrutiny/context only — NEVER for requiredAuthority.
  void cycleBinding.cycleProfile;

  let actualWork: ActualExecutionWork | undefined = undefined;
  let mission:
    | import("./deriveActualExecutionWorkFromProductContext").ProductMissionFields
    | null = null;

  if (!input.explicitEffects && !input.forceEffectsUnresolved) {
    const recovered = await resolvePostEvidenceRecoveryContext({
      oa,
      projectId: input.projectId,
    });
    if (!recovered.ok) {
      return {
        ok: false,
        code: recovered.code,
        message: recovered.message,
      };
    }

    const derived = deriveActualExecutionWorkFromProductContext({
      projectId: input.projectId,
      projectTitle,
      projectObjective,
      basis,
      selectedOptionRef,
      recoveryContext: recovered.context,
      clientOperationKind: input.qualifiedOperationKind,
    });
    if (!derived.ok) {
      return derived;
    }
    actualWork = derived.work;
    mission = derived.mission;
  }

  const envelopeResult = deriveW3AExecutionEnvelope({
    projectId: input.projectId,
    decisionId: decision.decisionId,
    basis,
    selectedOptionRef,
    selectedOptionIntent: selected.intent,
    selectedOptionLabel: selected.label,
    projectObjective,
    actualWork,
    explicitEffects: input.explicitEffects,
    forceEffectsUnresolved: input.forceEffectsUnresolved,
    mission,
  });
  if (!envelopeResult.ok) {
    return envelopeResult;
  }
  const envelope = envelopeResult.envelope;

  const f3Guard = assertNotF3FixtureSemantics({
    action: envelope.action,
    target: envelope.target,
    scope: envelope.scope,
    requiredCapabilities: envelope.requiredCapabilities,
  });
  if (f3Guard) {
    return f3Guard;
  }

  const safeId = safeIdSegment(decision.decisionId);
  const executionContractId = `xct:w3a:${safeId}`;
  const idempotencyKey = `idem:w3a-prep:${decision.decisionId}`;
  const issuedAt = oa.clock.nowIso();
  const issuedAtMs = Date.parse(issuedAt);
  const expiresAt = Number.isFinite(issuedAtMs)
    ? new Date(issuedAtMs + S1_MAX_TTL_SECONDS * 1000).toISOString()
    : issuedAt;

  const useAuthS1 =
    input.authenticatedPilote != null && input.forceLocalAuthority !== true;

  let authorityEvidenceId: string;
  let actor = LOCAL_PILOTE_ACTOR;

  if (useAuthS1) {
    const pilote = input.authenticatedPilote!;
    actor = pilote.actor;
    const contractSemantic = {
      executionContractId,
      projectId: input.projectId,
      cycleInstanceId: cycleBinding.cycleInstanceId,
      decisionRefs: [decision.decisionId],
      action: envelope.action,
      target: envelope.target,
      scope: envelope.scope,
      inputs: envelope.inputs,
      expectedOutputs: [...envelope.expectedOutputs],
      requiredCapabilities: [...envelope.requiredCapabilities],
      requiredAuthority: envelope.requiredAuthority,
      constraints: [...envelope.constraints],
      stopConditions: [...envelope.stopConditions],
      evidenceRequirements: [...envelope.evidenceRequirements],
      reversibility: envelope.reversibility,
      idempotencyKey,
    };
    const issued = issueS1AuthorityEvidence({
      pilote,
      authorityResolver: oa.authorityResolver,
      contract: contractSemantic,
      governedEffects: {
        effectClass: envelope.effects.effectClass,
        rollbackAvailable: envelope.effects.rollbackAvailable,
        protectedBoundaries: envelope.effects.protectedBoundaries,
        scopeIn: envelope.scope,
        target: envelope.target,
      },
      issuedAt,
      expiresAt,
      evidenceId: `evd:w3a-auth-s1:${decision.decisionId}`,
    });
    if (!issued.ok) {
      return {
        ok: false,
        code: issued.code,
        message: issued.message,
      };
    }
    authorityEvidenceId = issued.evidence.evidenceId;
  } else {
    const authority = registerLocalPiloteAuthority({
      authorityResolver: oa.authorityResolver,
      scope: envelope.scope,
      issuedAt,
      evidenceId: `evd:w3a-prep:${decision.decisionId}`,
      forceEnable: input.forceLocalAuthority === true,
    });
    if (!authority.ok) {
      return {
        ok: false,
        code: authority.code,
        message: authority.message,
      };
    }
    authorityEvidenceId = authority.evidenceId;
  }

  const built =
    await oa.executionContractServices.buildExecutionContract.execute({
      executionContractId,
      projectId: input.projectId,
      cycleInstanceId: cycleBinding.cycleInstanceId,
      decisionRefs: [decision.decisionId],
      action: envelope.action,
      target: envelope.target,
      scope: envelope.scope,
      inputs: envelope.inputs,
      expectedOutputs: [...envelope.expectedOutputs],
      requiredCapabilities: [...envelope.requiredCapabilities],
      requiredAuthority: envelope.requiredAuthority,
      constraints: [...envelope.constraints],
      stopConditions: [...envelope.stopConditions],
      evidenceRequirements: [...envelope.evidenceRequirements],
      reversibility: envelope.reversibility,
      idempotencyKey,
      correlationId: `cor:w3a-prep:${decision.decisionId}`,
      actor,
      authorityEvidenceId,
    });

  if (!built.ok) {
    return {
      ok: false,
      code: built.error.detailCode,
      message: built.error.message,
    };
  }

  const validated =
    await oa.executionContractServices.validateExecutionContract.execute({
      executionContractId: built.contract.executionContractId,
      actor,
      authorityEvidenceId,
    });

  if (!validated.ok) {
    return {
      ok: false,
      code: validated.error.detailCode,
      message: validated.error.message,
    };
  }

  const contract = validated.contract;
  if (!contract.cycleInstanceId) {
    return {
      ok: false,
      code: "CYCLE_BINDING_REQUIRED",
      message: "ExecutionContract matérialisé sans cycleInstanceId — refuse.",
    };
  }

  const disclosureResult = projectExecutionContractInspectionDisclosure(contract);
  // Incomplete docs_write disclosure is attached honestly; inspection fails closed.

  return {
    ok: true,
    contract: {
      executionContractId: contract.executionContractId,
      version: contract.version,
      status: contract.status,
      action: contract.action,
      target: contract.target,
      scope: contract.scope,
      requiredAuthority: contract.requiredAuthority,
      constraints: [...contract.constraints],
      stopConditions: [...contract.stopConditions],
      requiredCapabilities: [...contract.requiredCapabilities],
      reversibility: contract.reversibility,
      semanticFingerprint: contract.semanticFingerprint ?? "",
      decisionRefs: [...(contract.decisionRefs ?? [])],
      cycleInstanceId: contract.cycleInstanceId,
      effectClass: envelope.effects.effectClass,
      effectConfirmationRequired: envelope.effectConfirmationRequired,
      effectConfirmationLevel: envelope.effectConfirmationLevel,
      inspectionDisclosure: disclosureResult.disclosure,
    },
    decisionId: decision.decisionId,
    executionPerformed: false,
    attemptCreated: false,
    f3SemanticOverwrite: false,
  };
}
