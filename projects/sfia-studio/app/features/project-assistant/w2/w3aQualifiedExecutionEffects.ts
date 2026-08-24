/**
 * W3-A — non-durable Qualified Execution Effects (Morris B2/B3).
 *
 * Application-level envelope ONLY. Not an aggregate, store, repository, or SoT.
 * FC-08 materializes ExecutionContract as the first durable SoT.
 *
 * Trajectory option governed/bounded = governance context / provenance only.
 * Cycle profile / CKC never alone determine authority.
 */

import type { AuthorityClass, Reversibility } from "@/lib/oa/execution-contract";

/** Bounded Product Completion effect taxonomy (governance, not a product catalog). */
export type ExecutionEffectClass =
  | "read"
  | "simulate"
  | "generate-temporary-artifact"
  | "local-write"
  | "commit"
  | "push"
  | "pull-request"
  | "merge"
  | "critical-delete"
  | "doctrine-change"
  | "baseline-promotion"
  | "unknown";

/** Executable action strings derived from effect class — never trajectory-governed/bounded. */
export type ProductExecutionAction =
  | "product:read"
  | "product:simulate"
  | "product:generate-temporary-artifact"
  | "product:local-write"
  | "product:commit"
  | "product:push"
  | "product:pull-request"
  | "product:merge"
  | "product:critical-delete"
  | "product:doctrine-change"
  | "product:baseline-promotion";

export type ProductExecutionCapability =
  | "cap:product-read"
  | "cap:product-simulate"
  | "cap:product-temp-artifact"
  | "cap:product-local-write"
  | "cap:product-commit"
  | "cap:product-git-push"
  | "cap:product-pull-request"
  | "cap:product-merge"
  | "cap:product-critical-delete"
  | "cap:product-doctrine-change"
  | "cap:product-baseline-promotion";

export type QualifiedExecutionEffects = {
  readonly effectClass: ExecutionEffectClass;
  readonly action: ProductExecutionAction;
  readonly target: string;
  readonly scopeIn: string;
  readonly scopeOut: readonly string[];
  readonly protectedBoundaries: readonly string[];
  /** True when a credible rollback/cleanup path exists for the effects. */
  readonly rollbackAvailable: boolean;
  readonly rollbackDescription: string | null;
  readonly requiredCapabilities: readonly ProductExecutionCapability[];
  readonly evidenceRequirements: readonly string[];
  readonly morrisConstructionGateRequired: boolean;
  readonly provenance: {
    readonly trajectoryOptionRef: string | null;
    readonly qualificationSource: string;
    readonly notes: readonly string[];
  };
};

export type EffectQualificationFailure = {
  readonly ok: false;
  readonly code:
    | "EFFECTS_UNRESOLVED"
    | "REVERSIBILITY_UNRESOLVED"
    | "AUTHORITY_UNRESOLVED"
    | "PREPARATION_BLOCKED"
    | "SCOPE_UNRESOLVED"
    | "TRAJECTORY_NOT_EXECUTABLE";
  readonly message: string;
};

const EFFECT_TO_ACTION: Record<
  Exclude<ExecutionEffectClass, "unknown">,
  ProductExecutionAction
> = {
  read: "product:read",
  simulate: "product:simulate",
  "generate-temporary-artifact": "product:generate-temporary-artifact",
  "local-write": "product:local-write",
  commit: "product:commit",
  push: "product:push",
  "pull-request": "product:pull-request",
  merge: "product:merge",
  "critical-delete": "product:critical-delete",
  "doctrine-change": "product:doctrine-change",
  "baseline-promotion": "product:baseline-promotion",
};

const EFFECT_TO_CAPABILITY: Record<
  Exclude<ExecutionEffectClass, "unknown">,
  ProductExecutionCapability
> = {
  read: "cap:product-read",
  simulate: "cap:product-simulate",
  "generate-temporary-artifact": "cap:product-temp-artifact",
  "local-write": "cap:product-local-write",
  commit: "cap:product-commit",
  push: "cap:product-git-push",
  "pull-request": "cap:product-pull-request",
  merge: "cap:product-merge",
  "critical-delete": "cap:product-critical-delete",
  "doctrine-change": "cap:product-doctrine-change",
  "baseline-promotion": "cap:product-baseline-promotion",
};

/**
 * Morris Product Completion runtime projection: effects → requiredAuthority.
 * Pure function — not an AuthorityCatalog, not framing-34 global engine.
 */
export function projectRequiredAuthorityFromEffects(input: {
  readonly effectClass: ExecutionEffectClass;
  readonly rollbackAvailable: boolean;
  readonly protectedBoundaries: readonly string[];
}):
  | {
      readonly ok: true;
      readonly requiredAuthority: AuthorityClass;
      readonly morrisConstructionGateRequired: boolean;
    }
  | EffectQualificationFailure {
  const { effectClass, rollbackAvailable, protectedBoundaries } = input;

  if (effectClass === "unknown") {
    return {
      ok: false,
      code: "AUTHORITY_UNRESOLVED",
      message:
        "Effets d'exécution non qualifiés — requiredAuthority fail-closed.",
    };
  }

  if (
    effectClass === "doctrine-change" ||
    effectClass === "baseline-promotion"
  ) {
    return {
      ok: true,
      requiredAuthority: "N3",
      morrisConstructionGateRequired: true,
    };
  }

  if (
    effectClass === "push" ||
    effectClass === "pull-request" ||
    effectClass === "merge" ||
    effectClass === "critical-delete"
  ) {
    return {
      ok: true,
      requiredAuthority: "N3",
      morrisConstructionGateRequired: false,
    };
  }

  if (!rollbackAvailable && effectClass !== "read" && effectClass !== "simulate") {
    return {
      ok: true,
      requiredAuthority: "N3",
      morrisConstructionGateRequired: false,
    };
  }

  if (effectClass === "local-write" || effectClass === "commit") {
    const protectedHit = protectedBoundaries.length > 0;
    return {
      ok: true,
      requiredAuthority: protectedHit ? "N2" : "N2",
      morrisConstructionGateRequired: false,
    };
  }

  if (
    effectClass === "read" ||
    effectClass === "simulate" ||
    effectClass === "generate-temporary-artifact"
  ) {
    if (protectedBoundaries.length > 0) {
      return {
        ok: true,
        requiredAuthority: "N2",
        morrisConstructionGateRequired: false,
      };
    }
    return {
      ok: true,
      requiredAuthority: "N1",
      morrisConstructionGateRequired: false,
    };
  }

  return {
    ok: false,
    code: "AUTHORITY_UNRESOLVED",
    message: `Classe d'effet non projetable: ${effectClass}`,
  };
}

/**
 * Reversibility from effects + rollback facts — NEVER HumanDecision.reversible.
 */
export function deriveReversibilityFromEffects(input: {
  readonly effectClass: ExecutionEffectClass;
  readonly rollbackAvailable: boolean;
}):
  | { readonly ok: true; readonly reversibility: Reversibility }
  | EffectQualificationFailure {
  const { effectClass, rollbackAvailable } = input;

  if (effectClass === "unknown") {
    return {
      ok: false,
      code: "REVERSIBILITY_UNRESOLVED",
      message:
        "Réversibilité d'exécution non établie — préparation bloquée.",
    };
  }

  if (effectClass === "read") {
    // No mutation — model as reversible (no durable side-effect).
    return { ok: true, reversibility: "reversible" };
  }

  if (effectClass === "simulate") {
    return { ok: true, reversibility: "reversible" };
  }

  if (effectClass === "generate-temporary-artifact") {
    if (!rollbackAvailable) {
      return {
        ok: false,
        code: "REVERSIBILITY_UNRESOLVED",
        message:
          "Artefact temporaire sans rollback/cleanup crédible — préparation bloquée.",
      };
    }
    return { ok: true, reversibility: "reversible" };
  }

  if (
    effectClass === "push" ||
    effectClass === "merge" ||
    effectClass === "critical-delete" ||
    effectClass === "doctrine-change" ||
    effectClass === "baseline-promotion"
  ) {
    if (!rollbackAvailable) {
      return { ok: true, reversibility: "irreversible" };
    }
    return { ok: true, reversibility: "partially_reversible" };
  }

  if (effectClass === "local-write" || effectClass === "commit" || effectClass === "pull-request") {
    if (!rollbackAvailable) {
      return {
        ok: false,
        code: "REVERSIBILITY_UNRESOLVED",
        message:
          "Écriture/commit sans fait de rollback crédible — préparation bloquée.",
      };
    }
    return {
      ok: true,
      reversibility:
        effectClass === "commit" ? "partially_reversible" : "reversible",
    };
  }

  return {
    ok: false,
    code: "REVERSIBILITY_UNRESOLVED",
    message: `Réversibilité non dérivable pour ${effectClass}`,
  };
}

export function actionForEffectClass(
  effectClass: Exclude<ExecutionEffectClass, "unknown">,
): ProductExecutionAction {
  return EFFECT_TO_ACTION[effectClass];
}

export function capabilityForEffectClass(
  effectClass: Exclude<ExecutionEffectClass, "unknown">,
): ProductExecutionCapability {
  return EFFECT_TO_CAPABILITY[effectClass];
}

export function buildQualifiedExecutionEffects(input: {
  readonly effectClass: Exclude<ExecutionEffectClass, "unknown">;
  readonly projectId: string;
  readonly scopeIn: string;
  readonly scopeOut?: readonly string[];
  readonly protectedBoundaries?: readonly string[];
  readonly rollbackAvailable: boolean;
  readonly rollbackDescription?: string | null;
  readonly trajectoryOptionRef?: string | null;
  readonly qualificationSource: string;
  readonly notes?: readonly string[];
  /** Actual execution target — never fixture-shaped. */
  readonly target?: string;
}):
  | { readonly ok: true; readonly effects: QualifiedExecutionEffects }
  | EffectQualificationFailure {
  if (!input.scopeIn.trim()) {
    return {
      ok: false,
      code: "SCOPE_UNRESOLVED",
      message: "Scope IN manquant — effets non qualifiables.",
    };
  }

  const target = (input.target ?? "").trim();
  if (!target) {
    return {
      ok: false,
      code: "PREPARATION_BLOCKED",
      message: "Target d'exécution manquant — effets non qualifiables.",
    };
  }

  const protectedBoundaries = [...(input.protectedBoundaries ?? [])];
  const authority = projectRequiredAuthorityFromEffects({
    effectClass: input.effectClass,
    rollbackAvailable: input.rollbackAvailable,
    protectedBoundaries,
  });
  if (!authority.ok) return authority;

  const reversibility = deriveReversibilityFromEffects({
    effectClass: input.effectClass,
    rollbackAvailable: input.rollbackAvailable,
  });
  if (!reversibility.ok) return reversibility;

  const action = actionForEffectClass(input.effectClass);
  const capability = capabilityForEffectClass(input.effectClass);

  return {
    ok: true,
    effects: {
      effectClass: input.effectClass,
      action,
      target,
      scopeIn: input.scopeIn.trim(),
      scopeOut: [...(input.scopeOut ?? [])],
      protectedBoundaries,
      rollbackAvailable: input.rollbackAvailable,
      rollbackDescription: input.rollbackDescription ?? null,
      requiredCapabilities: [capability],
      evidenceRequirements: [`evreq:${input.effectClass}`],
      morrisConstructionGateRequired: authority.morrisConstructionGateRequired,
      provenance: {
        trajectoryOptionRef: input.trajectoryOptionRef ?? null,
        qualificationSource: input.qualificationSource,
        notes: [...(input.notes ?? [])],
      },
    },
  };
}

/**
 * @deprecated Do not call as W2-decide fallback.
 * Temporary-artifact work must come from ActualExecutionWork qualification.
 * Kept only for explicit negative/migration tests that assert its removal
 * from the product prepare path.
 */
export function qualifyDefaultW3ATemporaryArtifactEffects(_input: {
  readonly projectId: string;
  readonly scopeIn: string;
  readonly trajectoryOptionRef: string;
  readonly scopeOut?: readonly string[];
}): EffectQualificationFailure {
  return {
    ok: false,
    code: "EFFECTS_UNRESOLVED",
    message:
      "Fallback W2-decide→temporary-artifact interdit — qualifier ActualExecutionWork explicitement.",
  };
}
