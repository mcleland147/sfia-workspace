/**
 * W2 Track A — server-side resolution of the qualification truth that feeds
 * Option/Recommendation derivation.
 *
 * Inputs come exclusively from durable state (Project/LPS, CycleInstance,
 * materialized EpistemicItems). The client never supplies them, so the option
 * set and the recommendation are reproducible for a given project state and a
 * hostile payload cannot reshape what is proposed or decided.
 *
 * Phase B: also surfaces doctrine pin fields from LPS for product-native CKC
 * load. No Proposal-store / F2 process-local dependency.
 */

import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { readLiveProjectContext } from "@/lib/vertical-slice-runtime";
import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import type { Digest } from "@/lib/oa/doctrine/domain/types";
import { PRODUCT_GOVERNED_CONSTRAINT } from "@/lib/oa/execution-contract";
import { PRODUCT_CANONICAL_EXECUTION_ACTION } from "./w3aProductExecutionSemantics";
import type { TrajectoryOptionInputs } from "./trajectoryOptions";

export type ResolvedW2Qualification = {
  readonly inputs: TrajectoryOptionInputs;
  readonly activeCycleInstanceId: string;
  readonly lpsVersion: number;
  readonly objective: string;
  readonly projectTitle: string;
  readonly packagePin: DoctrinePackagePin;
};

const MAX_REPORTED_RESERVATIONS = 5;

export async function resolveW2QualificationInputs(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
}): Promise<
  | { readonly ok: true; readonly qualification: ResolvedW2Qualification }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const { oa } = input;
  const live = await readLiveProjectContext(oa, input.projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }
  const cycleInstanceId = live.context.activeCycleInstanceId;
  if (!cycleInstanceId) {
    return {
      ok: false,
      code: "CYCLE_NOT_QUALIFIED",
      message:
        "Aucun cycle qualifié n'est actif — la qualification doit précéder les options.",
    };
  }

  const cycle = await oa.cycleServices.getCycle.execute({
    cycleInstanceId,
  });
  if (!cycle.ok) {
    return {
      ok: false,
      code: cycle.error.detailCode,
      message: "Cycle qualifié introuvable — options impossibles à instruire.",
    };
  }

  const epistemic = await oa.cycleServices.getEpistemicState.execute({
    projectId: input.projectId,
  });
  const reservations = epistemic.ok
    ? epistemic.state.items
        .filter(
          (item) => item.type === "Reservation" && item.status === "active",
        )
        .map((item) => item.statement)
        .slice(0, MAX_REPORTED_RESERVATIONS)
    : [];
  const blockingReservation = epistemic.ok
    ? epistemic.state.items.some(
        (item) =>
          item.type === "Reservation" &&
          item.status === "active" &&
          item.blocking === true,
      )
    : false;

  const packagePin: DoctrinePackagePin = Object.freeze({
    doctrinePackageId: live.context.doctrinePackageId,
    version: live.context.doctrineVersion,
    digest: live.context.doctrineDigest as Digest,
  });

  return {
    ok: true,
    qualification: {
      inputs: {
        cycleTypeId: cycle.cycle.cycleTypeId,
        recommendedProfile: cycle.cycle.profile,
        criticalSignalsPresent: cycle.cycle.profile === "Critical",
        irreversible: blockingReservation,
        reservations,
        ckcAttribution: live.context.ckcResolutionRef,
      },
      activeCycleInstanceId: cycleInstanceId,
      lpsVersion: live.context.lpsVersion,
      objective: live.context.objective,
      projectTitle: live.context.projectTitle,
      packagePin,
    },
  };
}

/**
 * EP-S2-08 — W3-C post-Evidence CKC orientation (Morris 2026-10-28 Option A bounded).
 *
 * Cycle-bound: use Attempt→EC→CycleInstance lineage (not LPS alone).
 * Project-only: `cyc:delivery` ONLY when durable Generic NON_STRUCTURAL Delivery
 * eligibility is positively proven on the Attempt's ExecutionContract.
 *
 * Universal fallback `activeCycleInstanceId=null → cyc:delivery` is NOT authorized.
 * Anti-claims: ≠ invent CycleInstance · ≠ authorize W2 Options · ≠ HumanDecision ·
 * ≠ Product PASS · ≠ SHE/gate mutation. CKC remains cognitive guidance only.
 *
 * Provenance note: EC `impactSignals` / `intentKind` are PREPARE-persisted analysis
 * stamps (Boolean-coerced when Nora signals present) or HD-sealed when decisionRefs
 * exist — not independent HumanDecision facts on every Generic path.
 */
export const POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID = "cyc:delivery";

/** Product F2 admits only read_only | other | null for executionIntent.intentKind. */
const ADMITTED_INTENT_KINDS = new Set(["read_only", "other"]);

export type ProjectOnlyDeliveryCkcEligibility =
  | {
      readonly eligible: true;
      readonly reasonCode: "GENERIC_NON_STRUCTURAL_DELIVERY";
    }
  | {
      readonly eligible: false;
      readonly reasonCode:
        | "CONTRACT_PROJECT_MISMATCH"
        | "NOT_PROJECT_ONLY_CONTRACT"
        | "NOT_GENERIC_PRODUCT_EC"
        | "MATERIALITY_ABSENT"
        | "MATERIALITY_CONTRADICTION"
        | "MATERIALITY_NOT_NON_STRUCTURAL"
        | "IMPACT_SIGNALS_ABSENT"
        | "IMPACT_SIGNALS_MALFORMED"
        | "IMPACT_CATEGORY_NON_DELIVERY"
        | "READ_ONLY_NOT_DELIVERY"
        | "INTENT_ABSENT_OR_UNKNOWN"
        | "BOUNDED_NON_MUTATING_NOT_DELIVERY"
        | "DELIVERY_POSITIVE_FACTS_ABSENT";
    };

type DurableImpactSignals = {
  readonly structuralChange: boolean;
  readonly securityImpact: boolean;
  readonly architectureImpact: boolean;
  readonly dataImpact: boolean;
  readonly irreversible: boolean;
};

type MaterialityClass = "non_structural" | "structural" | "unknown";

function readImpactSignals(
  inputs: Record<string, unknown> | undefined,
):
  | { readonly ok: true; readonly signals: DurableImpactSignals }
  | { readonly ok: false; readonly reason: "absent" | "malformed" } {
  const raw = inputs?.impactSignals;
  if (raw == null) return { ok: false, reason: "absent" };
  if (typeof raw !== "object" || Array.isArray(raw)) {
    return { ok: false, reason: "malformed" };
  }
  const o = raw as Record<string, unknown>;
  for (const key of [
    "structuralChange",
    "securityImpact",
    "architectureImpact",
    "dataImpact",
    "irreversible",
  ] as const) {
    if (typeof o[key] !== "boolean") return { ok: false, reason: "malformed" };
  }
  return {
    ok: true,
    signals: {
      structuralChange: o.structuralChange as boolean,
      securityImpact: o.securityImpact as boolean,
      architectureImpact: o.architectureImpact as boolean,
      dataImpact: o.dataImpact as boolean,
      irreversible: o.irreversible as boolean,
    },
  };
}

function materialityFromConstraintToken(
  constraints: readonly string[],
): MaterialityClass | null | "conflict" {
  const found = new Set<MaterialityClass>();
  for (const c of constraints) {
    if (c === "MATERIALITY:NON_STRUCTURAL") found.add("non_structural");
    else if (c === "MATERIALITY:STRUCTURAL") found.add("structural");
    else if (c === "MATERIALITY:UNKNOWN") found.add("unknown");
  }
  if (found.size === 0) return null;
  if (found.size > 1) return "conflict";
  return [...found][0]!;
}

function materialityFromFacts(
  inputs: Record<string, unknown> | undefined,
): MaterialityClass | null | "malformed" {
  const facts = inputs?.materialityFacts;
  if (!facts || typeof facts !== "object" || Array.isArray(facts)) return null;
  const f = facts as {
    assessedMateriality?: unknown;
    materiality?: unknown;
  };
  // Authoritative PREPARE stamp is assessedMateriality; legacy `materiality` accepted.
  const raw =
    f.assessedMateriality !== undefined && f.assessedMateriality !== null
      ? f.assessedMateriality
      : f.materiality !== undefined && f.materiality !== null
        ? f.materiality
        : null;
  if (raw === null) return null;
  if (typeof raw !== "string") return "malformed";
  const normalized = raw.trim().toLowerCase().replace(/-/g, "_");
  if (
    normalized === "non_structural" ||
    normalized === "structural" ||
    normalized === "unknown"
  ) {
    return normalized;
  }
  return "malformed";
}

/**
 * Consistent materiality — no first-value-wins between constraint and facts.
 */
function readConsistentMateriality(
  constraints: readonly string[],
  inputs: Record<string, unknown> | undefined,
):
  | { readonly ok: true; readonly materiality: MaterialityClass }
  | {
      readonly ok: false;
      readonly reason:
        | "MATERIALITY_ABSENT"
        | "MATERIALITY_CONTRADICTION"
        | "MATERIALITY_NOT_NON_STRUCTURAL";
    } {
  const fromConstraint = materialityFromConstraintToken(constraints);
  if (fromConstraint === "conflict") {
    return { ok: false, reason: "MATERIALITY_CONTRADICTION" };
  }
  const fromFacts = materialityFromFacts(inputs);
  if (fromFacts === "malformed") {
    return { ok: false, reason: "MATERIALITY_CONTRADICTION" };
  }
  if (fromConstraint != null && fromFacts != null && fromConstraint !== fromFacts) {
    return { ok: false, reason: "MATERIALITY_CONTRADICTION" };
  }
  const materiality = fromConstraint ?? fromFacts;
  if (materiality == null) {
    return { ok: false, reason: "MATERIALITY_ABSENT" };
  }
  if (materiality !== "non_structural") {
    return { ok: false, reason: "MATERIALITY_NOT_NON_STRUCTURAL" };
  }
  return { ok: true, materiality };
}

/** Exact Product effect class only — never prefix (blocks local-write-extra). */
const EXACT_LOCAL_WRITE_EFFECT_CLASS = "EFFECT_CLASS:local-write";

/**
 * Independent positive Delivery / implementation facts beyond intentKind exclusion.
 *
 * scopeIn / concreteMissionPaths prove WHERE only — NOT sufficient for Delivery WHAT.
 *
 * Affirmative durable WHAT accepted today (exact):
 * - inputs.repositoryMutationDeclared === "write"
 * - constraints includes exact EFFECT_CLASS:local-write
 *
 * EP-S2-08-PROOF-01 Option 1 (2026-10-28): Generic PREPARE preserves an
 * already-declared analysis.repositoryMutationDeclared enum onto the EC
 * (no invention; no EFFECT_CLASS:local-write stamp). Absence remains null
 * and fails closed here. Declaration ≠ SHE authorization.
 */
function hasPositiveDeliveryImplementationFacts(input: {
  readonly constraints: readonly string[];
  readonly inputs?: Record<string, unknown>;
}): boolean {
  const inputs = input.inputs;
  if (inputs?.boundedNonMutatingAnalysis === true) return false;
  if (
    input.constraints.includes("MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED")
  ) {
    return false;
  }
  const mutation = inputs?.repositoryMutationDeclared;
  if (mutation === "none" || mutation === "read") return false;

  if (mutation === "write") return true;
  if (input.constraints.includes(EXACT_LOCAL_WRITE_EFFECT_CLASS)) return true;
  return false;
}

/**
 * Pure eligibility over durable EC stamps (Option A + R1 final corrections).
 * Does not invent mission fields — reads Generic PREPARE / SHE durable stamps only.
 */
export function assessProjectOnlyDeliveryCkcEligibility(input: {
  readonly projectId: string;
  readonly contract: {
    readonly projectId: string;
    readonly cycleInstanceId?: string | null;
    readonly action: string;
    readonly constraints: readonly string[];
    readonly inputs?: Record<string, unknown>;
  };
}): ProjectOnlyDeliveryCkcEligibility {
  const { contract } = input;
  if (contract.projectId !== input.projectId) {
    return { eligible: false, reasonCode: "CONTRACT_PROJECT_MISMATCH" };
  }
  if ((contract.cycleInstanceId ?? null) !== null) {
    return { eligible: false, reasonCode: "NOT_PROJECT_ONLY_CONTRACT" };
  }
  if (
    contract.action !== PRODUCT_CANONICAL_EXECUTION_ACTION ||
    !contract.constraints.includes(PRODUCT_GOVERNED_CONSTRAINT)
  ) {
    return { eligible: false, reasonCode: "NOT_GENERIC_PRODUCT_EC" };
  }

  const materiality = readConsistentMateriality(
    contract.constraints,
    contract.inputs,
  );
  if (!materiality.ok) {
    return { eligible: false, reasonCode: materiality.reason };
  }

  const signalsResult = readImpactSignals(contract.inputs);
  if (!signalsResult.ok) {
    return {
      eligible: false,
      reasonCode:
        signalsResult.reason === "absent"
          ? "IMPACT_SIGNALS_ABSENT"
          : "IMPACT_SIGNALS_MALFORMED",
    };
  }
  const signals = signalsResult.signals;
  // Authoritative materiality treats any of these as positive structural signal.
  if (
    signals.structuralChange ||
    signals.architectureImpact ||
    signals.securityImpact ||
    signals.dataImpact ||
    signals.irreversible
  ) {
    return { eligible: false, reasonCode: "IMPACT_CATEGORY_NON_DELIVERY" };
  }

  const intentRaw = contract.inputs?.intentKind;
  const intentKind =
    typeof intentRaw === "string" && intentRaw.trim().length > 0
      ? intentRaw.trim()
      : null;
  if (intentKind == null) {
    return { eligible: false, reasonCode: "INTENT_ABSENT_OR_UNKNOWN" };
  }
  if (!ADMITTED_INTENT_KINDS.has(intentKind)) {
    return { eligible: false, reasonCode: "INTENT_ABSENT_OR_UNKNOWN" };
  }
  if (intentKind === "read_only") {
    return { eligible: false, reasonCode: "READ_ONLY_NOT_DELIVERY" };
  }
  // intentKind === "other" — admitted catch-all; must not alone imply Delivery.
  if (contract.inputs?.boundedNonMutatingAnalysis === true) {
    return { eligible: false, reasonCode: "BOUNDED_NON_MUTATING_NOT_DELIVERY" };
  }
  if (
    !hasPositiveDeliveryImplementationFacts({
      constraints: contract.constraints,
      inputs: contract.inputs,
    })
  ) {
    return { eligible: false, reasonCode: "DELIVERY_POSITIVE_FACTS_ABSENT" };
  }

  return { eligible: true, reasonCode: "GENERIC_NON_STRUCTURAL_DELIVERY" };
}

export type ResolvedPostEvidenceCkcContext = {
  readonly cycleTypeId: string;
  readonly packagePin: DoctrinePackagePin;
  readonly lpsVersion: number;
  readonly projectScoped: boolean;
  readonly activeCycleInstanceId: string | null;
  readonly eligibilityReasonCode: string | null;
};

function isAmbiguousEligibilityReason(reasonCode: string): boolean {
  return (
    reasonCode === "IMPACT_SIGNALS_ABSENT" ||
    reasonCode === "IMPACT_SIGNALS_MALFORMED" ||
    reasonCode === "MATERIALITY_ABSENT" ||
    reasonCode === "MATERIALITY_CONTRADICTION" ||
    reasonCode === "INTENT_ABSENT_OR_UNKNOWN" ||
    reasonCode === "DELIVERY_POSITIVE_FACTS_ABSENT"
  );
}

export async function resolvePostEvidenceCkcContext(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly attemptId: string;
}): Promise<
  | { readonly ok: true; readonly context: ResolvedPostEvidenceCkcContext }
  | { readonly ok: false; readonly code: string; readonly message: string }
> {
  const live = await readLiveProjectContext(input.oa, input.projectId);
  if (!live.ok) {
    return { ok: false, code: live.code, message: live.message };
  }

  const packagePin: DoctrinePackagePin = Object.freeze({
    doctrinePackageId: live.context.doctrinePackageId,
    version: live.context.doctrineVersion,
    digest: live.context.doctrineDigest as Digest,
  });

  const attemptServices = input.oa.executionAttemptServices;
  const contractServices = input.oa.executionContractServices;
  if (!attemptServices || !contractServices) {
    return {
      ok: false,
      code: "EXECUTION_SERVICES_UNAVAILABLE",
      message:
        "Services Attempt/EC indisponibles — orientation CKC post-Evidence refusee.",
    };
  }

  // Attempt → EC lineage is authoritative for this post-Evidence orientation.
  const attempt = await attemptServices.getExecutionAttempt.execute({
    attemptId: input.attemptId,
  });
  if (!attempt.ok) {
    return {
      ok: false,
      code: attempt.error.detailCode,
      message: "Attempt introuvable pour eligibilite CKC post-Evidence.",
    };
  }

  const ec = await contractServices.getExecutionContract.execute({
    executionContractId: attempt.attempt.executionContractId,
  });
  if (!ec.ok) {
    return {
      ok: false,
      code: ec.error.detailCode,
      message: "ExecutionContract introuvable pour eligibilite CKC post-Evidence.",
    };
  }

  if (ec.contract.projectId !== input.projectId) {
    return {
      ok: false,
      code: "POST_EVIDENCE_CKC_ATTEMPT_PROJECT_MISMATCH",
      message:
        "Attempt/EC projectId diverge du Project demande — orientation CKC refusee.",
    };
  }

  const ecCycleId = ec.contract.cycleInstanceId ?? null;
  const lpsCycleId = live.context.activeCycleInstanceId ?? null;

  // Cycle-bound Attempt/EC: resolve CKC from EC cycle lineage (not LPS alone).
  if (ecCycleId != null) {
    if (lpsCycleId != null && lpsCycleId !== ecCycleId) {
      return {
        ok: false,
        code: "POST_EVIDENCE_CKC_CYCLE_LINEAGE_MISMATCH",
        message:
          "LPS activeCycle diverge de l'EC de l'Attempt — orientation CKC refusee (fail-closed).",
      };
    }
    const cycle = await input.oa.cycleServices.getCycle.execute({
      cycleInstanceId: ecCycleId,
    });
    if (!cycle.ok) {
      return {
        ok: false,
        code: cycle.error.detailCode,
        message:
          "CycleInstance de l'EC introuvable pour orientation CKC post-Evidence.",
      };
    }
    if (cycle.cycle.projectId !== input.projectId) {
      return {
        ok: false,
        code: "POST_EVIDENCE_CKC_PROVENANCE_INCOHERENT",
        message:
          "CycleInstance de l'EC hors Project — orientation CKC refusee.",
      };
    }
    return {
      ok: true,
      context: {
        cycleTypeId: cycle.cycle.cycleTypeId,
        packagePin,
        lpsVersion: live.context.lpsVersion,
        projectScoped: false,
        activeCycleInstanceId: ecCycleId,
        eligibilityReasonCode: "ACTIVE_CYCLE_TYPE",
      },
    };
  }

  // Project-only EC: refuse silent adoption of a newer LPS active cycle.
  if (lpsCycleId != null) {
    return {
      ok: false,
      code: "POST_EVIDENCE_CKC_PROVENANCE_INCOHERENT",
      message:
        "EC Project-only mais LPS a un cycle actif — orientation CKC refusee (pas de substitution silencieuse).",
    };
  }

  const eligibility = assessProjectOnlyDeliveryCkcEligibility({
    projectId: input.projectId,
    contract: {
      projectId: ec.contract.projectId,
      cycleInstanceId: ec.contract.cycleInstanceId,
      action: ec.contract.action,
      constraints: ec.contract.constraints,
      inputs: ec.contract.inputs,
    },
  });
  if (!eligibility.eligible) {
    return {
      ok: false,
      code: isAmbiguousEligibilityReason(eligibility.reasonCode)
        ? "POST_EVIDENCE_CKC_AMBIGUOUS"
        : "POST_EVIDENCE_CKC_NOT_ELIGIBLE",
      message: `Orientation CKC Delivery Project-only refusee (${eligibility.reasonCode}) — pas de fallback universel.`,
    };
  }

  return {
    ok: true,
    context: {
      cycleTypeId: POST_EVIDENCE_PROJECT_SCOPED_CYCLE_TYPE_ID,
      packagePin,
      lpsVersion: live.context.lpsVersion,
      projectScoped: true,
      activeCycleInstanceId: null,
      eligibilityReasonCode: eligibility.reasonCode,
    },
  };
}
