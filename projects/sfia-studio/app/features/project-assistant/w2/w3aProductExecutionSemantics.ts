/**
 * W3-A — product-native FC-08 envelope from ActualExecutionWork → Effects.
 *
 * Order:
 *   explicit ActualExecutionWork (Nora/Studio / Pilot)
 *   → QualifiedExecutionEffects (non-durable)
 *   → authority/reversibility/capabilities/Confirmation from effects
 *   → FC-08 Build/Validate → ExecutionContract (first durable SoT)
 *   → AgentRegistry selection AFTER contract
 *
 * Trajectory governed/bounded = provenance only — NEVER action / scope / target / authority.
 * HumanDecision.reversible = NEVER ExecutionContract.reversibility.
 * Cycle profile / CKC = NEVER alone determine requiredAuthority or Confirmation.
 */

import type { DecisionBasis } from "@/lib/oa/decision";
import type { AuthorityClass, Reversibility } from "@/lib/oa/execution-contract";
import { EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED } from "@/lib/oa/execution-contract";
import {
  BOUNDED_OPTION_REF,
  CLARIFY_OPTION_REF,
  GOVERNED_OPTION_REF,
} from "./trajectoryOptions";
import {
  type ActualExecutionWork,
  effectConfirmationConstraint,
  projectConfirmationRequirementFromEffects,
  qualifyEffectsFromActualExecutionWork,
} from "./w3aActualExecutionWork";
import {
  type EffectQualificationFailure,
  type QualifiedExecutionEffects,
  projectRequiredAuthorityFromEffects,
  deriveReversibilityFromEffects,
} from "./w3aQualifiedExecutionEffects";

/** Implementation / provenance marker — NOT authority-bearing scope. */
export const W3A_IMPLEMENTATION_MARKER =
  "w3:governed-execute:studio-canonical" as const;

export type W3AExecutionEnvelope = {
  readonly action: string;
  readonly scope: string;
  readonly target: string;
  readonly requiredCapabilities: readonly string[];
  readonly requiredAuthority: AuthorityClass;
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly evidenceRequirements: readonly string[];
  readonly reversibility: Reversibility;
  readonly expectedOutputs: readonly string[];
  readonly inputs: Record<string, unknown>;
  readonly effects: QualifiedExecutionEffects;
  /** Effect-driven Confirmation — independent of requiredAuthority. */
  readonly effectConfirmationRequired: boolean;
  readonly effectConfirmationLevel: "N1" | "N2" | "N3" | null;
};

export type EnvelopePrepareFailure =
  | EffectQualificationFailure
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

function productConstraints(
  basis: DecisionBasis,
  effects: QualifiedExecutionEffects,
  confirmationConstraint: string | null,
): string[] {
  const eb = basis.executionBasis;
  return [
    "PRODUCT_GOVERNED",
    "FIXTURE_EXECUTOR_BOUNDARY_ONLY",
    "NO_REAL",
    "NO_CURSOR_REAL",
    "NO_ATTEMPT_AT_PREPARE",
    `IMPLEMENTATION_MARKER:${W3A_IMPLEMENTATION_MARKER}`,
    `EFFECT_CLASS:${effects.effectClass}`,
    ...(confirmationConstraint
      ? [confirmationConstraint]
      : [EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED]),
    ...(effects.morrisConstructionGateRequired
      ? ["MORRIS_CONSTRUCTION_GATE_REQUIRED"]
      : []),
    ...(effects.protectedBoundaries.map((b) => `PROTECTED:${b}`)),
    ...(eb.outOfScope ?? []).map((s) => `OUT_OF_SCOPE:${s}`),
    ...(eb.risks ?? []).map((s) => `RISK:${s}`),
    ...(eb.reservations ?? []).map((s) => `RESERVATION:${s}`),
    ...(effects.scopeOut.map((s) => `SCOPE_OUT:${s}`)),
  ];
}

function productStopConditions(basis: DecisionBasis): string[] {
  const eb = basis.executionBasis;
  const stops = new Set<string>([
    ...(eb.stopConditions ?? []),
    "AUTHORITY_DENIED",
    "CONTEXT_STALE",
    "DECISION_NOT_CURRENT",
    "EFFECTS_UNRESOLVED",
    "EXECUTOR_INSUFFICIENT",
    "CONFIRMATION_REQUIRED",
  ]);
  return [...stops];
}

/**
 * Qualify effects then derive FC-08 envelope fields.
 *
 * Requires ActualExecutionWork OR explicitEffects.
 * W2 trajectory alone NEVER selects the execution action.
 */
export function deriveW3AExecutionEnvelope(input: {
  readonly projectId: string;
  readonly decisionId: string;
  readonly basis: DecisionBasis;
  readonly selectedOptionRef: string;
  readonly selectedOptionIntent: string;
  readonly selectedOptionLabel: string;
  readonly projectObjective: string | null;
  /** Required product path — Nora/Studio qualified work. */
  readonly actualWork?: ActualExecutionWork;
  /** Optional pre-qualified effects (same application path / tests). */
  readonly explicitEffects?: QualifiedExecutionEffects;
  /** Force unknown-effects fail-closed for negative proof. */
  readonly forceEffectsUnresolved?: boolean;
}):
  | { readonly ok: true; readonly envelope: W3AExecutionEnvelope }
  | EnvelopePrepareFailure {
  if (
    input.selectedOptionRef !== GOVERNED_OPTION_REF &&
    input.selectedOptionRef !== BOUNDED_OPTION_REF
  ) {
    if (input.selectedOptionRef === CLARIFY_OPTION_REF) {
      return {
        ok: false,
        code: "TRAJECTORY_NOT_EXECUTABLE",
        message:
          "Trajectoire « clarifier d'abord » — aucune préparation d'exécution autorisée.",
      };
    }
    return {
      ok: false,
      code: "TRAJECTORY_NOT_EXECUTABLE",
      message: `Option ${input.selectedOptionRef} — enveloppe d'exécution non préparable.`,
    };
  }

  if (input.forceEffectsUnresolved === true) {
    return {
      ok: false,
      code: "EFFECTS_UNRESOLVED",
      message:
        "Effets d'exécution non qualifiés — préparation fail-closed.",
    };
  }

  let effects: QualifiedExecutionEffects;
  let weakBoundary = true;

  if (input.explicitEffects) {
    effects = input.explicitEffects;
    weakBoundary = effects.protectedBoundaries.length === 0;
  } else if (input.actualWork) {
    weakBoundary = input.actualWork.weakBoundary;
    const qualified = qualifyEffectsFromActualExecutionWork({
      work: input.actualWork,
      trajectoryOptionRef: input.selectedOptionRef,
    });
    if (!qualified.ok) return qualified;
    effects = qualified.effects;
  } else {
    return {
      ok: false,
      code: "EFFECTS_UNRESOLVED",
      message:
        "Aucun ActualExecutionWork qualifié — W2 trajectory seule ne sélectionne pas l'action d'exécution.",
    };
  }

  // Trajectory markers must never leak as executable action.
  if (
    effects.action.includes("trajectory-governed") ||
    effects.action.includes("trajectory-bounded") ||
    effects.action.startsWith("w2:decide-trajectory")
  ) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message:
        "Action d'exécution ne peut pas être une option de trajectoire W2.",
    };
  }

  // W2 option intent must never become EC.scope.
  if (
    effects.scopeIn === input.selectedOptionIntent ||
    effects.scopeIn === (input.basis.executionBasis.scope?.trim() ?? "")
  ) {
    // Only fail when basis/intent look like trajectory prose (long governance text).
    const looksLikeTrajectoryIntent =
      input.selectedOptionIntent.length > 40 &&
      (input.selectedOptionIntent.includes("décider") ||
        input.selectedOptionIntent.includes("Inspecter") ||
        input.selectedOptionIntent.includes("inspecter") ||
        input.selectedOptionIntent.includes("périmètre réversible"));
    if (looksLikeTrajectoryIntent && effects.scopeIn === input.selectedOptionIntent) {
      return {
        ok: false,
        code: "PREPARATION_BLOCKED",
        message:
          "EC.scope ne peut pas être selectedOption.intent (intention de trajectoire W2).",
      };
    }
  }

  if (effects.scopeIn === W3A_IMPLEMENTATION_MARKER) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message:
        "Le marqueur d'implémentation W3-A ne peut pas servir de scope authority-bearing.",
    };
  }

  const authority = projectRequiredAuthorityFromEffects({
    effectClass: effects.effectClass,
    rollbackAvailable: effects.rollbackAvailable,
    protectedBoundaries: effects.protectedBoundaries,
  });
  if (!authority.ok) return authority;

  const reversibility = deriveReversibilityFromEffects({
    effectClass: effects.effectClass,
    rollbackAvailable: effects.rollbackAvailable,
  });
  if (!reversibility.ok) return reversibility;

  const confirmation = projectConfirmationRequirementFromEffects({
    effectClass: effects.effectClass,
    protectedBoundaries: effects.protectedBoundaries,
    rollbackAvailable: effects.rollbackAvailable,
    weakBoundary,
  });
  if ("ok" in confirmation && confirmation.ok === false) {
    return confirmation;
  }
  const confirmationOk = confirmation as Exclude<
    typeof confirmation,
    EffectQualificationFailure
  >;

  const confirmationConstraint =
    confirmationOk.required && confirmationOk.level
      ? effectConfirmationConstraint(confirmationOk.level)
      : null;

  const eb = input.basis.executionBasis;
  const expectedOutputs = eb.expectedOutcome
    ? [eb.expectedOutcome]
    : [`Résultat d'exécution — ${effects.effectClass}`];

  return {
    ok: true,
    envelope: {
      action: effects.action,
      target: effects.target,
      scope: effects.scopeIn,
      requiredCapabilities: [...effects.requiredCapabilities],
      requiredAuthority: authority.requiredAuthority,
      constraints: productConstraints(
        input.basis,
        effects,
        confirmationConstraint,
      ),
      stopConditions: productStopConditions(input.basis),
      evidenceRequirements: [...effects.evidenceRequirements],
      reversibility: reversibility.reversibility,
      expectedOutputs,
      effects,
      effectConfirmationRequired: confirmationOk.required,
      effectConfirmationLevel: confirmationOk.required
        ? confirmationOk.level
        : null,
      inputs: {
        projectId: input.projectId,
        decisionId: input.decisionId,
        selectedOptionRef: input.selectedOptionRef,
        selectedOptionLabel: input.selectedOptionLabel,
        // Provenance only — NOT EC.scope
        trajectoryOptionIntent: input.selectedOptionIntent,
        trajectoryOptionIsNotAction: true,
        trajectoryOptionIsNotScope: true,
        executionScope: effects.scopeIn,
        effectClass: effects.effectClass,
        rollbackAvailable: effects.rollbackAvailable,
        rollbackDescription: effects.rollbackDescription,
        weakBoundary,
        effectConfirmationRequired: confirmationOk.required,
        effectConfirmationLevel: confirmationOk.required
          ? confirmationOk.level
          : null,
        implementationMarker: W3A_IMPLEMENTATION_MARKER,
        objective: eb.objective ?? input.projectObjective,
        cycleTypeId: eb.cycleTypeId,
        recommendedProfile: eb.recommendedProfile,
        sourceRef: input.basis.sourceRef,
        sourceDigest: input.basis.sourceDigest,
        authoritySource: "EFFECTS_PROJECTION_PRODUCT_COMPLETION",
        confirmationSource: "EFFECTS_C2_SECTION_10",
        reversibilitySource: "EFFECTS_PLUS_ROLLBACK_FACTS",
        morrisConstructionGateRequired: effects.morrisConstructionGateRequired,
        qualificationSource: effects.provenance.qualificationSource,
      },
    },
  };
}

/** Guard against accidental F3 / trajectory-as-action leakage. */
export function assertNotF3FixtureSemantics(fields: {
  action: string;
  target: string;
  scope: string;
  requiredCapabilities: readonly string[];
}): EnvelopePrepareFailure | null {
  if (
    fields.action.includes("fixture") ||
    fields.action === "fixture-docs-prepare"
  ) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "Action fixture interdite sur le chemin canonique /studio.",
    };
  }
  if (fields.target.includes("f3-fixture")) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "Cible fixture interdite sur le chemin canonique /studio.",
    };
  }
  if (fields.requiredCapabilities.some((c) => c.includes("f3-fixture"))) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "Capability fixture interdite sur le chemin canonique /studio.",
    };
  }
  if (
    fields.action.includes("trajectory-governed") ||
    fields.action.includes("trajectory-bounded")
  ) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "Action trajectoire W2 interdite comme action d'exécution.",
    };
  }
  if (fields.scope === W3A_IMPLEMENTATION_MARKER) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "Scope authority-bearing ne peut pas être le marqueur W3-A.",
    };
  }
  return null;
}
