/**
 * W3-A — non-durable Actual Execution Work qualification (FC-04 / Nora-Studio).
 *
 * Application DTO ONLY. Not an aggregate, store, repository, or durable SoT.
 * Feeds QualifiedExecutionEffects → FC-08 materializes ExecutionContract.
 *
 * W2 trajectory option = governance context / provenance ONLY.
 * It never selects action, effects, target, scope, or authority.
 *
 * Canonical /studio product path (R13/R15): only read / simulate /
 * generate-temporary-artifact may become ActualExecutionWork.
 * High-risk kinds remain effect-policy taxonomy only until facts are
 * product-qualified (no durable ActualExecutionWork SoT).
 */

import {
  EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED,
} from "@/lib/oa/execution-contract";
import type {
  ExecutionEffectClass,
  QualifiedExecutionEffects,
  EffectQualificationFailure,
} from "./w3aQualifiedExecutionEffects";
import { buildQualifiedExecutionEffects } from "./w3aQualifiedExecutionEffects";

/** Product-stable execution scopes — authority-bearing, NOT W2 option intents. */
export const W3A_PRODUCT_SCOPE = {
  READ: "product:read-only",
  SIMULATE: "product:simulate-sandbox",
  TEMP_ARTIFACT: "product:temporary-local-artifact",
  LOCAL_WRITE: "product:local-durable-write",
  COMMIT: "product:local-commit",
  PUSH: "product:git-push",
  PULL_REQUEST: "product:pull-request",
  MERGE: "product:merge",
  CRITICAL_DELETE: "product:critical-delete",
  DOCTRINE: "product:doctrine-mutation",
  BASELINE: "product:baseline-promotion",
} as const;

/** Product-stable execution target — project binding stays on EC.projectId. */
export const W3A_PRODUCT_TARGET_WORKSPACE = "product:project-workspace" as const;

/**
 * Canonical W3-A actual work kinds — facts are product-qualifiable today.
 * Not a global ActionCatalog.
 */
export type W3ACanonicalActualOperationKind =
  | "read"
  | "simulate"
  | "generate-temporary-artifact";

/** @deprecated Use W3ACanonicalActualOperationKind — alias for prepare path. */
export type ActualExecutionOperationKind = W3ACanonicalActualOperationKind;

/**
 * Effect-policy taxonomy kinds (authority/Confirmation/reversibility projection).
 * NOT executable ActualExecutionWork from operationKind alone on /studio.
 */
export type EffectPolicyOnlyOperationKind =
  | "local-write"
  | "commit"
  | "push"
  | "pull-request"
  | "merge"
  | "critical-delete"
  | "doctrine-change"
  | "baseline-promotion";

export type ActualExecutionWork = {
  readonly operationKind: W3ACanonicalActualOperationKind;
  readonly effectClass: Exclude<
    ExecutionEffectClass,
    | "unknown"
    | "local-write"
    | "commit"
    | "push"
    | "pull-request"
    | "merge"
    | "critical-delete"
    | "doctrine-change"
    | "baseline-promotion"
  >;
  readonly target: string;
  readonly scopeIn: string;
  readonly scopeOut: readonly string[];
  readonly protectedBoundaries: readonly string[];
  readonly rollbackAvailable: boolean;
  readonly rollbackDescription: string | null;
  /** Weak vs protected frontier — drives Confirmation independently of N-level. */
  readonly weakBoundary: boolean;
  readonly qualificationSource: string;
  readonly notes: readonly string[];
};

export type ConfirmationRequirementFromEffects =
  | {
      readonly ok?: undefined;
      readonly required: false;
      readonly level: null;
      readonly reason: string;
    }
  | {
      readonly ok?: undefined;
      readonly required: true;
      readonly level: "N1" | "N2" | "N3";
      readonly reason: string;
    };

const CANONICAL_KIND_TO_SCOPE: Record<W3ACanonicalActualOperationKind, string> =
  {
    read: W3A_PRODUCT_SCOPE.READ,
    simulate: W3A_PRODUCT_SCOPE.SIMULATE,
    "generate-temporary-artifact": W3A_PRODUCT_SCOPE.TEMP_ARTIFACT,
  };

const CANONICAL_KINDS = new Set<string>(Object.keys(CANONICAL_KIND_TO_SCOPE));

const HIGH_RISK_POLICY_ONLY_KINDS = new Set<string>([
  "local-write",
  "commit",
  "push",
  "pull-request",
  "merge",
  "critical-delete",
  "doctrine-change",
  "baseline-promotion",
]);

export function isCanonicalW3AActualOperationKind(
  value: unknown,
): value is W3ACanonicalActualOperationKind {
  return typeof value === "string" && CANONICAL_KINDS.has(value);
}

/** Alias — product prepare path accepts canonical kinds only. */
export function isActualExecutionOperationKind(
  value: unknown,
): value is W3ACanonicalActualOperationKind {
  return isCanonicalW3AActualOperationKind(value);
}

export function isHighRiskPolicyOnlyOperationKind(value: unknown): boolean {
  return typeof value === "string" && HIGH_RISK_POLICY_ONLY_KINDS.has(value);
}

type ConfirmationLevel = "N1" | "N2" | "N3";

function confirmationRank(level: ConfirmationLevel | null): number {
  if (level === null) return 0;
  if (level === "N1") return 1;
  if (level === "N2") return 2;
  return 3;
}

function maxConfirmationLevel(
  a: ConfirmationLevel | null,
  b: ConfirmationLevel | null,
): ConfirmationLevel | null {
  return confirmationRank(a) >= confirmationRank(b) ? a : b;
}

/**
 * Intrinsic Confirmation from effect class (C2 §10) — before protected floor.
 */
function intrinsicConfirmationFromEffects(input: {
  readonly effectClass: ExecutionEffectClass;
  readonly rollbackAvailable: boolean;
  readonly weakBoundary: boolean;
}): ConfirmationRequirementFromEffects | EffectQualificationFailure {
  const { effectClass, rollbackAvailable, weakBoundary } = input;

  if (effectClass === "unknown") {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message:
        "Effets non qualifiés — besoin de Confirmation fail-closed.",
    };
  }

  if (effectClass === "read") {
    return {
      required: false,
      level: null,
      reason: "C2 §10.1 lecture seule — aucune Confirmation",
    };
  }

  if (
    effectClass === "push" ||
    effectClass === "pull-request" ||
    effectClass === "merge" ||
    effectClass === "critical-delete" ||
    effectClass === "doctrine-change" ||
    effectClass === "baseline-promotion" ||
    (!rollbackAvailable &&
      effectClass !== "simulate" &&
      effectClass !== "generate-temporary-artifact")
  ) {
    return {
      required: true,
      level: "N3",
      reason: "C2 §10.2 effet N3 / irréversible — Confirmation N3",
    };
  }

  if (effectClass === "commit" || effectClass === "local-write") {
    return {
      required: true,
      level: "N2",
      reason: "C2 §10.2 écriture/commit — Confirmation N2",
    };
  }

  if (effectClass === "simulate") {
    return {
      required: true,
      level: "N1",
      reason: "C2 §10.1 simulation — Confirmation légère N1 selon policy",
    };
  }

  if (effectClass === "generate-temporary-artifact") {
    if (weakBoundary) {
      return {
        required: true,
        level: "N1",
        reason:
          "C2 §10.2 artefact temporaire local · frontière faible — Confirmation N1 légère",
      };
    }
    return {
      required: true,
      level: "N2",
      reason:
        "C2 §10.2 artefact temporaire hors frontière faible — Confirmation N2",
    };
  }

  return {
    ok: false,
    code: "PREPARATION_BLOCKED",
    message: `Confirmation non dérivable pour ${effectClass}`,
  };
}

/**
 * C2 §10 — Confirmation from effects / protections / reversibility.
 * Independent of requiredAuthority and of cycle profile.
 *
 * R14: effectiveLevel = max(intrinsicEffectLevel, protectedBoundaryFloor).
 * Protected boundary is a floor/aggravator (min N2) — never a downgrade.
 */
export function projectConfirmationRequirementFromEffects(input: {
  readonly effectClass: ExecutionEffectClass;
  readonly protectedBoundaries: readonly string[];
  readonly rollbackAvailable: boolean;
  readonly weakBoundary: boolean;
}): ConfirmationRequirementFromEffects | EffectQualificationFailure {
  const intrinsic = intrinsicConfirmationFromEffects(input);
  if ("ok" in intrinsic && intrinsic.ok === false) {
    return intrinsic;
  }
  const base = intrinsic as ConfirmationRequirementFromEffects;

  const protectedFloor: ConfirmationLevel | null =
    input.protectedBoundaries.length > 0 ? "N2" : null;

  if (!protectedFloor) {
    return base;
  }

  const effective = maxConfirmationLevel(
    base.required ? base.level : null,
    protectedFloor,
  );
  if (!effective) {
    return base;
  }

  return {
    required: true,
    level: effective,
    reason:
      base.required && confirmationRank(base.level) >= confirmationRank(protectedFloor)
        ? `${base.reason} · protected floor does not downgrade`
        : `C2 §10.2 protected path floor N2 · effective Confirmation ${effective} (max(intrinsic, floor))`,
  };
}

/**
 * Coherent scope OUT for a canonical operation — never forbids the current
 * scope IN / action effect (R13).
 */
function scopeOutForCanonicalKind(
  kind: W3ACanonicalActualOperationKind,
): readonly string[] {
  const common = ["REAL", "CURSOR_REAL"] as const;
  switch (kind) {
    case "read":
      return [
        ...common,
        "DURABLE_PROJECT_WRITE",
        "LOCAL_WRITE",
        "TEMPORARY_ARTIFACT_WRITE",
        "COMMIT",
        "GIT_PUSH",
        "GIT_PR",
        "GIT_MERGE",
        "DOCTRINE_MUTATION",
        "BASELINE_PROMOTION",
      ];
    case "simulate":
      return [
        ...common,
        "DURABLE_PROJECT_WRITE",
        "COMMIT",
        "GIT_PUSH",
        "GIT_PR",
        "GIT_MERGE",
        "DOCTRINE_MUTATION",
        "BASELINE_PROMOTION",
      ];
    case "generate-temporary-artifact":
      return [
        ...common,
        "DURABLE_PROJECT_WRITE",
        "COMMIT",
        "GIT_PUSH",
        "GIT_PR",
        "GIT_MERGE",
        "DOCTRINE_MUTATION",
        "BASELINE_PROMOTION",
      ];
  }
}

/**
 * Build ActualExecutionWork from an explicit Pilot/Nora canonical operation
 * kind + project-bound product facts. Never from W2 trajectory alone.
 * High-risk kinds must not call this — reject at prepare (R15).
 */
export function buildActualExecutionWork(input: {
  readonly operationKind: W3ACanonicalActualOperationKind;
  readonly projectId: string;
  readonly projectTitle?: string | null;
  readonly objective?: string | null;
  readonly protectedBoundaries?: readonly string[];
  readonly qualificationSource: string;
}): ActualExecutionWork | EffectQualificationFailure {
  if (!input.projectId.trim()) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "projectId requis pour qualifier le travail d'exécution.",
    };
  }

  if (!isCanonicalW3AActualOperationKind(input.operationKind)) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message:
        "operationKind hors chemin canonique W3-A (read/simulate/temp-artifact).",
    };
  }

  if (isHighRiskPolicyOnlyOperationKind(input.operationKind)) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message:
        "Opération à risque non qualifiable depuis operationKind seul — facts produit requis.",
    };
  }

  const kind = input.operationKind;
  const scopeIn = CANONICAL_KIND_TO_SCOPE[kind];
  const scopeOut = scopeOutForCanonicalKind(kind);
  const protectedBoundaries = [...(input.protectedBoundaries ?? [])];
  const weakBoundary =
    protectedBoundaries.length === 0 &&
    (kind === "generate-temporary-artifact" ||
      kind === "simulate" ||
      kind === "read");

  const rollbackAvailable = true;
  const rollbackDescription =
    kind === "generate-temporary-artifact"
      ? "Cleanup/delete of the temporary local artifact after Attempt terminal."
      : kind === "simulate"
        ? "Discard simulation sandbox state."
        : null;

  return {
    operationKind: kind,
    effectClass: kind,
    target: W3A_PRODUCT_TARGET_WORKSPACE,
    scopeIn,
    scopeOut,
    protectedBoundaries,
    rollbackAvailable,
    rollbackDescription,
    weakBoundary,
    qualificationSource: input.qualificationSource,
    notes: [
      `projectId=${input.projectId}`,
      input.projectTitle ? `projectTitle=${input.projectTitle}` : null,
      input.objective ? `objective=${input.objective}` : null,
      "W2 trajectory option is NOT the execution action/scope/target",
      "EC.projectId remains the project binding",
      `canonicalW3AActualWork=${kind}`,
    ].filter((n): n is string => n !== null),
  };
}

/** Map ActualExecutionWork → QualifiedExecutionEffects (still non-durable). */
export function qualifyEffectsFromActualExecutionWork(input: {
  readonly work: ActualExecutionWork;
  readonly trajectoryOptionRef?: string | null;
}):
  | { readonly ok: true; readonly effects: QualifiedExecutionEffects }
  | EffectQualificationFailure {
  const { work } = input;
  return buildQualifiedExecutionEffects({
    effectClass: work.effectClass,
    projectId: "bound-on-ec",
    scopeIn: work.scopeIn,
    scopeOut: work.scopeOut,
    protectedBoundaries: work.protectedBoundaries,
    rollbackAvailable: work.rollbackAvailable,
    rollbackDescription: work.rollbackDescription,
    trajectoryOptionRef: input.trajectoryOptionRef ?? null,
    qualificationSource: work.qualificationSource,
    notes: work.notes,
    target: work.target,
  });
}

/**
 * Constraint token persisted on EC so Validate/FC-09 can reconstruct
 * effect-driven Confirmation without a parallel SoT.
 * Prefix owned as string convention shared with OA Validate / readiness.
 */
export const EFFECT_CONFIRMATION_REQUIRED_CONSTRAINT =
  "EFFECT_CONFIRMATION_REQUIRED" as const;

export function effectConfirmationConstraint(
  level: "N1" | "N2" | "N3",
): string {
  return `${EFFECT_CONFIRMATION_REQUIRED_CONSTRAINT}:${level}`;
}

/** Durable marker when FC-08 evaluated Confirmation and concluded NOT REQUIRED (R16). */
export const CONFIRMATION_EVALUATED_NOT_REQUIRED_CONSTRAINT =
  EXECUTION_CONFIRMATION_EVALUATED_NOT_REQUIRED;

export function parseEffectConfirmationConstraint(
  constraints: readonly string[],
): { required: true; level: "N1" | "N2" | "N3" } | { required: false } {
  for (const c of constraints) {
    if (c.startsWith(`${EFFECT_CONFIRMATION_REQUIRED_CONSTRAINT}:`)) {
      const level = c.slice(EFFECT_CONFIRMATION_REQUIRED_CONSTRAINT.length + 1);
      if (level === "N1" || level === "N2" || level === "N3") {
        return { required: true, level };
      }
    }
    if (c === EFFECT_CONFIRMATION_REQUIRED_CONSTRAINT) {
      return { required: true, level: "N1" };
    }
  }
  return { required: false };
}
