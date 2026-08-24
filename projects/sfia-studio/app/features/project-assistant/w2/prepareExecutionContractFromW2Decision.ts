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
import type { F2ContextSnapshot } from "../f2/types";
import { loadPresentedOptionSet } from "./presentedOptionSet";
import {
  assertNotF3FixtureSemantics,
  deriveW3AExecutionEnvelope,
} from "./w3aProductExecutionSemantics";
import {
  buildActualExecutionWork,
  isActualExecutionOperationKind,
  isHighRiskPolicyOnlyOperationKind,
  type ActualExecutionWork,
} from "./w3aActualExecutionWork";
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
   * Explicit Pilot/Nora operation kind — REQUIRED for product path.
   * W2 trajectory alone never selects the execution action.
   * Hostile clients cannot invent kinds outside the allowlist.
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
  if (!traj) {
    return {
      ok: false,
      code: "TRAJECTORY_CONTEXT_REQUIRED",
      message:
        "DecisionBasis.trajectoryContext requis pour la préparation W2→W3.",
    };
  }

  const presented = await loadPresentedOptionSet(
    oa,
    input.projectId,
    basis.sourceRef,
  );
  if (!presented.ok) {
    return {
      ok: false,
      code: presented.code,
      message: presented.message,
    };
  }

  const selected = presented.presented.options.find(
    (o) => o.optionRef === traj.selectedOptionRef,
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

  let actualWork = undefined;
  if (!input.explicitEffects && !input.forceEffectsUnresolved) {
    // R15 — high-risk kinds are policy taxonomy only; reject before EC.
    if (isHighRiskPolicyOnlyOperationKind(input.qualifiedOperationKind)) {
      return {
        ok: false,
        code: "PREPARATION_BLOCKED",
        message:
          "Opération à risque non qualifiable depuis operationKind seul — ActualExecutionWork refuse push/write/commit/PR/merge/delete/doctrine/baseline sans facts produit.",
      };
    }
    if (!isActualExecutionOperationKind(input.qualifiedOperationKind)) {
      return {
        ok: false,
        code: "EFFECTS_UNRESOLVED",
        message:
          "Aucun travail d'exécution qualifié (operationKind) — W2 trajectory seule ne sélectionne pas l'action. Chemin canonique: read | simulate | generate-temporary-artifact.",
      };
    }
    const builtWork = buildActualExecutionWork({
      operationKind: input.qualifiedOperationKind,
      projectId: input.projectId,
      projectTitle,
      objective: projectObjective,
      qualificationSource:
        "studio.nora.actual-execution-work.from-explicit-operation-kind",
    });
    if ("ok" in builtWork && builtWork.ok === false) {
      return builtWork;
    }
    actualWork = builtWork as ActualExecutionWork;
  }

  const envelopeResult = deriveW3AExecutionEnvelope({
    projectId: input.projectId,
    decisionId: decision.decisionId,
    basis,
    selectedOptionRef: traj.selectedOptionRef,
    selectedOptionIntent: selected.intent,
    selectedOptionLabel: selected.label,
    projectObjective,
    actualWork,
    explicitEffects: input.explicitEffects,
    forceEffectsUnresolved: input.forceEffectsUnresolved,
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

  const issuedAt = oa.clock.nowIso();
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

  const safeId = safeIdSegment(decision.decisionId);
  const executionContractId = `xct:w3a:${safeId}`;
  const idempotencyKey = `idem:w3a-prep:${decision.decisionId}`;

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
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
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
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
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
    },
    decisionId: decision.decisionId,
    executionPerformed: false,
    attemptCreated: false,
    f3SemanticOverwrite: false,
  };
}
