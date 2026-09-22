/**
 * PJ-REPROOF-05 — mechanical Product Start invariants (NOT a second policy engine).
 *
 * Answers: may this already-built ExecutionContract proceed to Select / Execute / Start?
 *
 * Checks are mechanical / fail-closed:
 * - historical forever-forbid stamps (legacy EC compatibility)
 * - trusted launch context present when required
 *
 * Does NOT re-qualify mission, choose read/write/docs-write, or route executors.
 * Consumed by Authorize projection, UI Execute, Select (pre-Attempt), Start —
 * ONLY when {@link shouldApplyProductExecutionEligibility} is true.
 *
 * AUTHORIZED (authority verified) ≠ execution eligible.
 */

export type ProductExecutionEligibilityReasonCode =
  | "eligible"
  | "stop_before_execute"
  | "aucune_execution"
  | "no_attempt"
  | "prepare_only"
  | "fixture_boundary_only"
  | "no_real"
  | "no_cursor_real"
  | "scope_out_real"
  | "scope_out_cursor_real"
  | "missing_trusted_launch_context"
  | "stale_or_invalid_launch_context";

export type ProductExecutionEligibility = {
  readonly eligible: boolean;
  readonly reasonCode: ProductExecutionEligibilityReasonCode;
  /** Pilot-facing functional explanation — no HOW / agentType / fixture jargon. */
  readonly reasonText: string;
  readonly nextAction: string;
  readonly allowsCursorReal: boolean;
  readonly allowsMutatingEffects: boolean;
  readonly requiresTrustedLaunchContext: boolean;
};

const FULL_SHA_RE = /^[0-9a-f]{40}$/i;

/** Trajectory / authorize-flow markers — not Product EC forever-forbid when absent as stamps. */
export const TRAJECTORY_NON_EXECUTE_STOPS = [
  "AUCUNE EXÉCUTION",
  "STOP AVANT EXECUTE",
] as const;

/**
 * Durable Product family marker stamped by W3-A Product prepare
 * (`productConstraints`). Present on both canonical generic Product ECs and
 * the historical Batch Cookinb legacy Product EC (v2).
 */
export const PRODUCT_GOVERNED_CONSTRAINT = "PRODUCT_GOVERNED" as const;

/**
 * LEGACY PRODUCT COMPATIBILITY DISCRIMINANT — exact historical Product W3-A
 * surface observed on durable Batch Cookinb EC
 * `xct:w3a:dec:w2-trj:62b92385-…` (action/target/scope/capability).
 *
 * Not a Product routing catalogue. Not a mission type. Used only so Select/Start
 * still apply Product fail-closed invariants if an older Product EC somehow
 * lacked PRODUCT_GOVERNED (Batch Cookinb itself already carries PRODUCT_GOVERNED).
 */
export const LEGACY_PRODUCT_COMPAT_ACTION = "product:read" as const;
export const LEGACY_PRODUCT_COMPAT_TARGET =
  "product:project-workspace" as const;
export const LEGACY_PRODUCT_COMPAT_SCOPE = "product:read-only" as const;
export const LEGACY_PRODUCT_COMPAT_CAPABILITY = "cap:product-read" as const;

/**
 * Mechanical applicability: should Product PJ-REPROOF-05 Start invariants run?
 *
 * TRUE only for Product-family ExecutionContracts.
 * FALSE for F3 fixture, OA foundation lifecycle, sealed GCEC, and other
 * non-Product lanes that share SelectExecutionAgent / StartExecution.
 *
 * This is NOT a policy engine and does NOT choose read/write/docs-write/fixture.
 */
export function shouldApplyProductExecutionEligibility(input: {
  readonly constraints?: readonly string[] | null;
  readonly action?: string | null;
  readonly target?: string | null;
  readonly scope?: string | null;
  readonly requiredCapabilities?: readonly string[] | null;
}): boolean {
  const constraints = input.constraints ?? [];
  if (constraints.includes(PRODUCT_GOVERNED_CONSTRAINT)) {
    return true;
  }

  // LEGACY PRODUCT COMPATIBILITY DISCRIMINANT (exact historical surface).
  const caps = input.requiredCapabilities ?? [];
  if (
    input.action === LEGACY_PRODUCT_COMPAT_ACTION &&
    input.target === LEGACY_PRODUCT_COMPAT_TARGET &&
    input.scope === LEGACY_PRODUCT_COMPAT_SCOPE &&
    caps.includes(LEGACY_PRODUCT_COMPAT_CAPABILITY)
  ) {
    return true;
  }

  return false;
}

function hasExact(list: readonly string[], token: string): boolean {
  return list.some((c) => c === token);
}

function hasScopeOut(constraints: readonly string[], token: string): boolean {
  return constraints.includes(`SCOPE_OUT:${token}`);
}

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const t = value.trim();
  return t.length > 0 ? t : null;
}

function mutatingEffectsAllowed(constraints: readonly string[]): boolean {
  if (hasScopeOut(constraints, "DURABLE_PROJECT_WRITE")) return false;
  if (hasScopeOut(constraints, "LOCAL_WRITE")) return false;
  if (hasScopeOut(constraints, "COMMIT")) return false;
  if (hasScopeOut(constraints, "GIT_PUSH")) return false;
  if (hasScopeOut(constraints, "GIT_PR")) return false;
  if (hasScopeOut(constraints, "GIT_MERGE")) return false;
  return true;
}

function ineligible(
  reasonCode: Exclude<ProductExecutionEligibilityReasonCode, "eligible">,
  reasonText: string,
  nextAction: string,
  extras?: Partial<
    Pick<
      ProductExecutionEligibility,
      "allowsCursorReal" | "allowsMutatingEffects" | "requiresTrustedLaunchContext"
    >
  >,
): ProductExecutionEligibility {
  return {
    eligible: false,
    reasonCode,
    reasonText,
    nextAction,
    allowsCursorReal: false,
    allowsMutatingEffects: extras?.allowsMutatingEffects ?? false,
    requiresTrustedLaunchContext:
      extras?.requiresTrustedLaunchContext ?? true,
  };
}

/**
 * Resolve whether an ExecutionContract may proceed to Select / Execute / Start.
 *
 * Legacy Product ECs stamped NO_REAL / NO_CURSOR_REAL / FIXTURE_EXECUTOR_BOUNDARY_ONLY
 * / STOP AVANT EXECUTE remain fail-closed (historical, never silently rewritten).
 */
export function resolveProductExecutionEligibility(input: {
  readonly constraints?: readonly string[] | null;
  readonly stopConditions?: readonly string[] | null;
  readonly inputs?: Record<string, unknown> | null;
  /**
   * Product Cursor REAL path requires pinned launch context on the EC.
   * Default true for Product generalist Start. Tests may set false only when
   * proving stamp-level ineligibility without launch-context concerns.
   */
  readonly requireTrustedLaunchContext?: boolean;
}): ProductExecutionEligibility {
  const constraints = [...(input.constraints ?? [])];
  const stops = [...(input.stopConditions ?? [])];
  const inputs = (input.inputs ?? {}) as Record<string, unknown>;
  const allowMutations = mutatingEffectsAllowed(constraints);
  const requireCtx = input.requireTrustedLaunchContext !== false;

  if (hasExact(stops, "AUCUNE EXÉCUTION")) {
    return ineligible(
      "aucune_execution",
      "Ce contrat d'exécution interdit toute tentative — il n'est pas exécutable.",
      "Préparer un nouveau contrat d'exécution cohérent avec la mission, puis inspecter et autoriser à nouveau.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(stops, "STOP AVANT EXECUTE")) {
    return ineligible(
      "stop_before_execute",
      "Ce contrat porte une interdiction d'exécution — aucune tentative ne peut être créée.",
      "Requalifier la mission et préparer un nouveau contrat exécutable si l'intention le justifie.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(constraints, "NO_ATTEMPT")) {
    return ineligible(
      "no_attempt",
      "Ce contrat n'autorise aucune tentative d'exécution.",
      "Préparer un contrat successeur lorsque la mission est prête à être exécutée.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(constraints, "PREPARE_ONLY")) {
    return ineligible(
      "prepare_only",
      "Ce contrat est limité à la préparation — l'exécution n'est pas proposée.",
      "Compléter la résolution / préparation d'un contrat exécutable avant toute tentative.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(constraints, "FIXTURE_EXECUTOR_BOUNDARY_ONLY")) {
    return ineligible(
      "fixture_boundary_only",
      "Ce contrat n'est pas éligible à une exécution Product gouvernée dans son état actuel.",
      "Préparer un nouveau contrat dont les effets autorisés correspondent à la mission.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (hasExact(constraints, "NO_REAL") || hasScopeOut(constraints, "REAL")) {
    return ineligible(
      hasExact(constraints, "NO_REAL") ? "no_real" : "scope_out_real",
      "Ce contrat interdit une exécution réelle — aucune tentative ne peut être créée.",
      "Préparer un nouveau contrat si une exécution réelle (bornée) est désormais requise.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }
  if (
    hasExact(constraints, "NO_CURSOR_REAL") ||
    hasScopeOut(constraints, "CURSOR_REAL")
  ) {
    return ineligible(
      hasExact(constraints, "NO_CURSOR_REAL")
        ? "no_cursor_real"
        : "scope_out_cursor_real",
      "Ce contrat n'autorise pas le lancement Cursor pour cette mission.",
      "Préparer un nouveau contrat aligné sur les effets et le contexte de lancement requis.",
      { allowsMutatingEffects: allowMutations, requiresTrustedLaunchContext: requireCtx },
    );
  }

  if (requireCtx) {
    const baseHeadSha = asNonEmptyString(inputs.baseHeadSha);
    const repoIdentity =
      asNonEmptyString(inputs.repositoryBindingIdentity) ??
      asNonEmptyString(inputs.repositoryIdentity) ??
      asNonEmptyString(inputs.repositoryRef);

    if (!baseHeadSha) {
      return ineligible(
        "missing_trusted_launch_context",
        "Le contexte de lancement requis n'est pas fixé sur le contrat — exécution impossible.",
        "Préparer à nouveau le contrat afin que Studio y attache le contexte de dépôt / révision avant inspection.",
        {
          allowsMutatingEffects: allowMutations,
          requiresTrustedLaunchContext: true,
        },
      );
    }
    if (!FULL_SHA_RE.test(baseHeadSha)) {
      return ineligible(
        "stale_or_invalid_launch_context",
        "Le contexte de révision fixé sur le contrat est invalide — exécution refusée.",
        "Préparer un nouveau contrat avec un contexte de lancement fiable.",
        {
          allowsMutatingEffects: allowMutations,
          requiresTrustedLaunchContext: true,
        },
      );
    }
    if (!repoIdentity) {
      return ineligible(
        "missing_trusted_launch_context",
        "Aucun dépôt de projet fiable n'est lié au contrat — exécution impossible.",
        "Lier le projet à un dépôt fiable, puis préparer un nouveau contrat d'exécution.",
        {
          allowsMutatingEffects: allowMutations,
          requiresTrustedLaunchContext: true,
        },
      );
    }
  }

  return {
    eligible: true,
    reasonCode: "eligible",
    reasonText:
      "Autorité vérifiée et contrat exécutable — une tentative explicite peut être lancée.",
    nextAction:
      "Vous pouvez exécuter explicitement. Confirmer / exécuter ne modifie pas le contrat inspecté.",
    allowsCursorReal: true,
    allowsMutatingEffects: allowMutations,
    requiresTrustedLaunchContext: requireCtx,
  };
}

/**
 * Strip trajectory authorize-flow stop markers so they do not become durable
 * forever-forbid stamps on a newly prepared executable Product EC.
 */
export function filterTrajectoryNonExecuteStopsFromEc(
  stopConditions: readonly string[],
): string[] {
  const ban = new Set<string>(TRAJECTORY_NON_EXECUTE_STOPS);
  return stopConditions.filter((s) => !ban.has(s));
}
