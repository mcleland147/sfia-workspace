/**
 * PJ-REPROOF-04 — Product state → ExecutionContract mission derivation.
 *
 * Application helper ONLY (non-durable). Populates WHAT/mission fields from
 * durable Product facts so the Pilote never selects low-level HOW.
 *
 * Internal ActualExecutionWork remains an authority/effect control ONLY
 * (Confirmation / capability projection for fixture-safe Attempts).
 * It is NOT a Product mission category and NOT Cursor HOW.
 *
 * Derived from whether the mission perimeter authorizes mutating effects —
 * NEVER from selectedOptionRef === clarify-first (no option→operation table).
 *
 * Future tasks: create a new ExecutionContract (mission fields) — do NOT add
 * a new operation kind or executor type.
 *
 * Forbidden:
 * - selectedOptionRef → EC.action / EC.scope
 * - clarify-first → read hardcode
 * - diagnosticExecutor / mission-type switch
 * - client path / authority / capability injection
 */

import type { DecisionBasis } from "@/lib/oa/decision";
import {
  buildActualExecutionWork,
  isActualExecutionOperationKind,
  isHighRiskPolicyOnlyOperationKind,
  type ActualExecutionWork,
  type W3ACanonicalActualOperationKind,
} from "./w3aActualExecutionWork";
import type { EffectQualificationFailure } from "./w3aQualifiedExecutionEffects";
import type { PostEvidenceRecoveryContext } from "./resolvePostEvidenceRecoveryContext";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "./trajectoryOptions";

/** Mission WHAT fields folded into ExecutionContract.inputs / envelope. */
export type ProductMissionFields = {
  readonly objective: string;
  readonly expectedOutputs: readonly string[];
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly stopConditions: readonly string[];
  readonly evidenceRequirements: readonly string[];
  readonly sourcesToRead: readonly string[];
  readonly contextNotes: readonly string[];
  /** True when mission perimeter allows mutating filesystem/git effects. */
  readonly authorizesMutatingEffects: boolean;
  readonly recoveryAttemptId: string | null;
  readonly recoveryEvidenceId: string | null;
  readonly recoveryReviewBundleId: string | null;
  readonly recoveryExecutionContractId: string | null;
  readonly productOutcome: string | null;
};

export type DeriveProductMissionResult =
  | {
      readonly ok: true;
      readonly work: ActualExecutionWork;
      readonly mission: ProductMissionFields;
      readonly derivationSource: "durable_product_mission" | "compat_operation_kind";
    }
  | EffectQualificationFailure
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

/** @deprecated Use ProductMissionFields — alias during simplify transition. */
export type DiagnosticMissionSemantics = ProductMissionFields & {
  readonly kind?: string;
};

/** Trajectory governance marker — never an executable EC action. */
export function isNonExecutableTrajectoryRequestedOperation(
  requestedOperation: string | null | undefined,
): boolean {
  const op = requestedOperation?.trim() ?? "";
  return op.length === 0 || op.startsWith("w2:decide-trajectory:");
}

function missionFromRecovery(
  recovery: PostEvidenceRecoveryContext,
  projectObjective: string | null,
): ProductMissionFields {
  const outcomeLabel =
    recovery.productOutcome === "UNCLAIMED"
      ? "non encore pleinement démontré"
      : recovery.productOutcome === "STOP"
        ? "arrêté de façon gouvernée"
        : "en échec";
  return {
    objective:
      `Déterminer pourquoi le résultat produit précédent est ${outcomeLabel} ` +
      `et ce qui manque avant une nouvelle tentative` +
      (projectObjective ? ` — contexte projet: ${projectObjective}` : ""),
    expectedOutputs: [
      "Diagnostic utilisable des preuves manquantes / expected outcomes non tenus",
      "Prochaine étape produit recommandée (sans relance automatique)",
      `Trace d'inspection Attempt ${recovery.attemptId} / Evidence ${recovery.evidenceId} / ReviewBundle ${recovery.reviewBundleId}`,
    ],
    scopeIn: [
      "product:current-project",
      `attempt:${recovery.attemptId}`,
      `evidence:${recovery.evidenceId}`,
      `reviewBundle:${recovery.reviewBundleId}`,
      `executionContract:${recovery.executionContractId}`,
      "product:durable-facts-required-for-mission",
    ],
    scopeOut: [
      "unrelated-project-mutation",
      "automatic-relaunch",
      "claim-product-success-from-technical-success",
      "protected-boundary-without-authorization",
      "doctrine-or-baseline-promotion",
      "DURABLE_PROJECT_WRITE",
      "GIT_PUSH",
      "GIT_PR",
      "GIT_MERGE",
    ],
    stopConditions: [
      "REQUIRED_EVIDENCE_UNAVAILABLE",
      "CONTRADICTORY_DURABLE_TRUTH",
      "CAPABILITY_OR_AUTHORITY_INSUFFICIENT",
      "PROTECTED_EFFECT_OUTSIDE_AUTHORIZED_CONTRACT",
      "NO_AUTOMATIC_RELAUNCH",
    ],
    evidenceRequirements: [
      "evreq:mission-trace-of-inspected-durable-facts",
      "evreq:mission-result-for-nora-reevaluation",
    ],
    sourcesToRead: [
      `attempt:${recovery.attemptId}`,
      `evidence:${recovery.evidenceId}`,
      `reviewBundle:${recovery.reviewBundleId}`,
      `executionContract:${recovery.executionContractId}`,
    ],
    contextNotes: [
      `productOutcome=${recovery.productOutcome}`,
      `recommendationKind=${recovery.recommendationKind}`,
      `attemptStatus=${recovery.attemptStatus}`,
      `headline=${recovery.headline}`,
      `businessEffectProven=false`,
      `realProcessInvoked=${recovery.realProcessInvoked}`,
    ],
    // Perimeter forbids mutations — internal effect control, not option→op.
    authorizesMutatingEffects: false,
    recoveryAttemptId: recovery.attemptId,
    recoveryEvidenceId: recovery.evidenceId,
    recoveryReviewBundleId: recovery.reviewBundleId,
    recoveryExecutionContractId: recovery.executionContractId,
    productOutcome: recovery.productOutcome,
  };
}

function missionFromClarifyWithoutRecovery(
  projectObjective: string | null,
  basis: DecisionBasis,
): ProductMissionFields {
  const reserves = basis.executionBasis.reservations ?? [];
  return {
    objective:
      "Clarifier le contexte durable et les réserves avant d'engager une exécution structurante" +
      (projectObjective ? ` — ${projectObjective}` : ""),
    expectedOutputs: [
      "Diagnostic des réserves / incertitudes bloquantes",
      "Prochaine étape produit recommandée (sans exécution automatique)",
    ],
    scopeIn: [
      "product:current-project-facts",
      "product:decision-basis-and-lps",
      ...reserves.map((r) => `reservation:${r}`),
    ],
    scopeOut: [
      "unrelated-project-mutation",
      "automatic-execute",
      "protected-boundary-without-authorization",
      "DURABLE_PROJECT_WRITE",
      "GIT_PUSH",
      "GIT_PR",
      "GIT_MERGE",
    ],
    stopConditions: [
      "REQUIRED_CONTEXT_UNAVAILABLE",
      "CAPABILITY_OR_AUTHORITY_INSUFFICIENT",
      "NO_AUTOMATIC_EXECUTE",
    ],
    evidenceRequirements: ["evreq:mission-result-for-nora-reevaluation"],
    sourcesToRead: ["product:current-project-facts", "product:decision-basis-and-lps"],
    contextNotes: ["pre_engagement_clarify", ...reserves.slice(0, 5)],
    authorizesMutatingEffects: false,
    recoveryAttemptId: null,
    recoveryEvidenceId: null,
    recoveryReviewBundleId: null,
    recoveryExecutionContractId: null,
    productOutcome: null,
  };
}

/**
 * Internal effect control from mission perimeter — NOT from trajectory option.
 * Non-mutating perimeter → weak reversible control suitable for Confirmation projection.
 */
function buildInternalWorkFromMissionPerimeter(input: {
  readonly projectId: string;
  readonly projectTitle: string | null;
  readonly mission: ProductMissionFields;
  readonly qualificationSource: string;
}): ActualExecutionWork | EffectQualificationFailure {
  // Mutating missions still need sealed docs_write / GCEC path today —
  // do not invent a generalist mutator from trajectory alone.
  if (input.mission.authorizesMutatingEffects) {
    return {
      ok: false,
      code: "EFFECTS_UNRESOLVED",
      message:
        "Mission mutante sans sealed docs_write / GCEC — utiliser le chemin Proposal/M3 ou facts produit scellés.",
    };
  }
  const built = buildActualExecutionWork({
    operationKind: "read",
    projectId: input.projectId,
    projectTitle: input.projectTitle,
    objective: input.mission.objective,
    qualificationSource: input.qualificationSource,
  });
  if ("ok" in built && built.ok === false) return built;
  const work = built as ActualExecutionWork;
  return {
    ...work,
    notes: [
      ...work.notes,
      "INTERNAL_EFFECT_CONTROL_FROM_MISSION_PERIMETER",
      "NOT_OPTION_TO_OPERATION",
      "CURSOR_DETERMINES_HOW",
      ...input.mission.contextNotes,
    ],
  };
}

/**
 * Derive mission + internal effect control from durable Product context.
 */
export function deriveActualExecutionWorkFromProductContext(input: {
  readonly projectId: string;
  readonly projectTitle: string | null;
  readonly projectObjective: string | null;
  readonly basis: DecisionBasis;
  readonly selectedOptionRef: string;
  readonly recoveryContext: PostEvidenceRecoveryContext | null;
  /** Hostile / optional — never overrides durable mission derivation. */
  readonly clientOperationKind?: unknown;
}): DeriveProductMissionResult {
  const { selectedOptionRef, recoveryContext, basis } = input;

  if (isHighRiskPolicyOnlyOperationKind(input.clientOperationKind)) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message:
        "Opération à risque non qualifiable depuis operationKind client — refuse push/write/commit/PR/merge/delete/doctrine/baseline sans facts produit.",
    };
  }

  const clientKind: W3ACanonicalActualOperationKind | null =
    isActualExecutionOperationKind(input.clientOperationKind)
      ? input.clientOperationKind
      : null;

  // Durable mission from Product facts (recovery and/or clarify intent).
  // Option ref is provenance — never the operation selector.
  const canPrepareDurableMission =
    recoveryContext != null || selectedOptionRef === CLARIFY_OPTION_REF;

  if (canPrepareDurableMission) {
    const mission = recoveryContext
      ? missionFromRecovery(recoveryContext, input.projectObjective)
      : missionFromClarifyWithoutRecovery(input.projectObjective, basis);

    const work = buildInternalWorkFromMissionPerimeter({
      projectId: input.projectId,
      projectTitle: input.projectTitle,
      mission,
      qualificationSource:
        "studio.nora.mission-perimeter.internal-effect-control",
    });
    if ("ok" in work && work.ok === false) return work;
    void clientKind; // durable mission wins — ignore client HOW
    return {
      ok: true,
      work: work as ActualExecutionWork,
      mission,
      derivationSource: "durable_product_mission",
    };
  }

  if (
    selectedOptionRef !== GOVERNED_OPTION_REF &&
    selectedOptionRef !== BOUNDED_OPTION_REF
  ) {
    return {
      ok: false,
      code: "TRAJECTORY_NOT_EXECUTABLE",
      message: `Option ${selectedOptionRef} — mission d'exécution non dérivable.`,
    };
  }

  const requested = basis.executionBasis.requestedOperation?.trim() ?? "";
  if (
    !isNonExecutableTrajectoryRequestedOperation(requested) &&
    (basis.executionBasis.intentKind === "docs_write" ||
      requested === "cursor.docs_write.apply")
  ) {
    return {
      ok: false,
      code: "PREPARE_ROUTE_DOCS_WRITE",
      message:
        "DecisionBasis scellée docs_write — utiliser le chemin PREPARE Proposal/M3, pas le sandbox W3-A.",
    };
  }

  // Compat: allowlisted client kind for historical tests only — not Product UI.
  if (clientKind) {
    const built = buildActualExecutionWork({
      operationKind: clientKind,
      projectId: input.projectId,
      projectTitle: input.projectTitle,
      objective: input.projectObjective,
      qualificationSource:
        "studio.nora.actual-execution-work.from-compat-operation-kind",
    });
    if ("ok" in built && built.ok === false) return built;
    const work = built as ActualExecutionWork;
    const mission: ProductMissionFields = {
      objective: input.projectObjective ?? `Exécution ${clientKind}`,
      expectedOutputs: [`Résultat d'exécution — ${clientKind}`],
      scopeIn: [work.scopeIn],
      scopeOut: [...work.scopeOut],
      stopConditions: [],
      evidenceRequirements: [],
      sourcesToRead: [],
      contextNotes: ["compat_operation_kind"],
      authorizesMutatingEffects: clientKind === "generate-temporary-artifact",
      recoveryAttemptId: null,
      recoveryEvidenceId: null,
      recoveryReviewBundleId: null,
      recoveryExecutionContractId: null,
      productOutcome: null,
    };
    return {
      ok: true,
      work,
      mission,
      derivationSource: "compat_operation_kind",
    };
  }

  return {
    ok: false,
    code: "EFFECTS_UNRESOLVED",
    message:
      "Aucune mission dérivable du contexte produit durable — Studio n'invente pas de HOW depuis la trajectoire seule.",
  };
}
