/**
 * W3-B FC-11 — Product terminal projection from Attempt + Contract Result CE.
 * Consumes ClaimEvaluation.status (canonical SoT) — NOT heuristic semantics.
 */
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type { ClaimEvaluation } from "@/lib/oa/evidence-review";
import type { Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "@/lib/oa/evidence-review/domain/contractResultTypes";
import { contractResultBindingsMatchCurrentFacts } from "@/lib/oa/evidence-review/domain/contractResultTypes";
import { projectContractResultVerdict } from "@/lib/oa/evidence-review/application/contractResultVerdictProjection";

export type W3BProductTerminalKind = "SUCCESS" | "STOP" | "FAIL" | "UNCLAIMED";

export type W3BProductTerminalProjection = {
  readonly outcome: W3BProductTerminalKind;
  readonly businessHeadline: string;
  readonly businessReason: string;
  readonly claimAllowed: boolean;
  readonly evidenceId: string | null;
  readonly reviewBundleId: string | null;
  readonly claimEvaluationId: string | null;
  readonly claimEvaluationStatus: string | null;
  readonly contractResultVerdict: string | null;
  readonly evidenceStatus: string | null;
  readonly evidenceSummary: string | null;
  readonly reviewBundleCompleteness: string | null;
  readonly governedBoundary: string | null;
  readonly technicalDetail: {
    readonly attemptId: string;
    readonly attemptStatus: string;
    readonly resultRef: string | null;
    readonly errorRef: string | null;
    readonly stopReason: string | null;
    readonly stopOrigin: string | null;
    readonly stopCode: string | null;
    readonly executionContractId: string;
    readonly executionContractVersion: number;
  };
  readonly reservations: readonly string[];
  readonly antiClaims: {
    readonly ready: false;
    readonly w3Closed: false;
    readonly productCompletionComplete: false;
    readonly runtimeV3Adopted: false;
    readonly realProven: false;
    readonly cycleAutoClosed: false;
    readonly projectAutoArchived: false;
  };
  readonly cycleInstanceClosed: false;
  readonly projectArchived: false;
  readonly noraInvoked: false;
  readonly replanInvoked: false;
  readonly realExecution: false;
};

const PRODUCT_RESERVATIONS = [
  "Evidence requise avant claim produit",
  "Apprentissage / replan non démarrés",
  "Exécuteur de substitution — pas d'effet externe réel",
  "Aucun READY",
] as const;

const ANTI = {
  ready: false,
  w3Closed: false,
  productCompletionComplete: false,
  runtimeV3Adopted: false,
  realProven: false,
  cycleAutoClosed: false,
  projectAutoArchived: false,
} as const;

function unclaimed(reason: string): Pick<
  W3BProductTerminalProjection,
  "outcome" | "businessHeadline" | "businessReason" | "claimAllowed" | "governedBoundary"
> {
  return {
    outcome: "UNCLAIMED",
    businessHeadline: "Résultat produit non qualifié",
    businessReason: reason,
    claimAllowed: false,
    governedBoundary: null,
  };
}

function resolveGovernedBoundary(input: {
  stopCode?: string | null;
  stopReason?: string | null;
  stopConditions: readonly string[];
  constraints: readonly string[];
}): string | null {
  const token = input.stopCode?.trim() || input.stopReason?.trim();
  if (!token) return null;
  if (input.stopConditions.includes(token)) return token;
  const protectedConstraints = input.constraints.filter((c) =>
    c.startsWith("PROTECTED:"),
  );
  if (protectedConstraints.includes(token)) return token;
  for (const c of protectedConstraints) {
    if (token === c || token.startsWith(`${c} `) || token.startsWith(`${c}:`)) {
      return c;
    }
  }
  return null;
}

function evidenceSummaryFor(
  outcome: W3BProductTerminalKind,
  attemptStatus: string,
): string {
  if (outcome === "SUCCESS") {
    return "Evidence d'exécution disponible — résultat attendu prouvé par évaluation Contract Result.";
  }
  if (outcome === "STOP") {
    return "Evidence d'arrêt gouverné — frontière et raison documentées ; travail antérieur préservé.";
  }
  if (outcome === "FAIL") {
    return "Evidence diagnostique d'échec technique — aucun succès métier.";
  }
  return `Evidence non claimable (statut technique : ${attemptStatus}).`;
}

function isContractResultClaimEvaluation(
  ce: ClaimEvaluation | null | undefined,
): ce is ClaimEvaluation {
  return (
    ce != null &&
    ce.subjectKind === CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT
  );
}

export function projectW3bProductTerminal(input: {
  attempt: ExecutionAttempt;
  contract: ExecutionContract;
  evidence: Evidence | null;
  reviewBundle: ReviewBundle | null;
  claimEvaluation: ClaimEvaluation | null;
}): W3BProductTerminalProjection {
  const base = {
    evidenceId: input.evidence?.evidenceId ?? null,
    reviewBundleId: input.reviewBundle?.reviewBundleId ?? null,
    claimEvaluationId: input.claimEvaluation?.claimEvaluationId ?? null,
    claimEvaluationStatus: input.claimEvaluation?.status ?? null,
    contractResultVerdict: input.claimEvaluation
      ? projectContractResultVerdict(input.claimEvaluation.status)
      : null,
    evidenceStatus: input.evidence?.status ?? null,
    evidenceSummary: null as string | null,
    reviewBundleCompleteness: input.reviewBundle?.completeness ?? null,
    governedBoundary: null as string | null,
    technicalDetail: {
      attemptId: input.attempt.attemptId,
      attemptStatus: input.attempt.status,
      resultRef: input.attempt.resultRef ?? null,
      errorRef: input.attempt.errorRef ?? null,
      stopReason: input.attempt.stopReason ?? null,
      stopOrigin: input.attempt.stopOrigin ?? null,
      stopCode: input.attempt.stopCode ?? null,
      executionContractId: input.contract.executionContractId,
      executionContractVersion: input.contract.version,
    },
    reservations: [...PRODUCT_RESERVATIONS],
    antiClaims: ANTI,
    cycleInstanceClosed: false as const,
    projectArchived: false as const,
    noraInvoked: false as const,
    replanInvoked: false as const,
    realExecution: false as const,
  };

  if (!input.evidence || !input.reviewBundle) {
    return {
      ...base,
      ...unclaimed("Evidence / ReviewBundle absents — aucun claim produit."),
      evidenceSummary: null,
    };
  }
  if (input.reviewBundle.completeness !== "complete") {
    return {
      ...base,
      ...unclaimed("ReviewBundle incomplet — aucun claim produit."),
      evidenceSummary: null,
    };
  }
  if (
    input.evidence.status !== "available" &&
    input.evidence.status !== "verified"
  ) {
    return {
      ...base,
      ...unclaimed(
        `Evidence en état ${input.evidence.status} — claim produit refusé.`,
      ),
      evidenceSummary: null,
    };
  }
  if (!isContractResultClaimEvaluation(input.claimEvaluation)) {
    return {
      ...base,
      ...unclaimed(
        "Évaluation Contract Result absente — aucun claim produit SUCCESS/STOP/FAIL.",
      ),
      evidenceSummary: evidenceSummaryFor("UNCLAIMED", input.attempt.status),
    };
  }

  const ce = input.claimEvaluation;
  const verdict = projectContractResultVerdict(ce.status);

  if (
    ce.contractResultBindings &&
    !contractResultBindingsMatchCurrentFacts({
      bindings: ce.contractResultBindings,
      contract: input.contract,
      attempt: input.attempt,
      reviewBundle: {
        reviewBundleId: input.reviewBundle.reviewBundleId,
        frozenVersion: input.reviewBundle.frozenVersion,
      },
      evidenceIds: [input.evidence.evidenceId],
    })
  ) {
    return {
      ...base,
      ...unclaimed(
        "Évaluation Contract Result périmée — bindings EC/RB/Attempt ne correspondent plus.",
      ),
      evidenceSummary: evidenceSummaryFor("UNCLAIMED", input.attempt.status),
    };
  }

  if (
    input.attempt.status === "succeeded" &&
    ce.status === "pass" &&
    verdict === "PASS"
  ) {
    const expectedSummary = (input.contract.expectedOutputs ?? []).join(" · ");
    return {
      ...base,
      outcome: "SUCCESS",
      businessHeadline: "Succès",
      businessReason: `Résultat attendu obtenu dans le périmètre « ${input.contract.scope} » : ${expectedSummary}.`,
      claimAllowed: true,
      governedBoundary: null,
      evidenceSummary: evidenceSummaryFor("SUCCESS", input.attempt.status),
    };
  }

  if (
    input.attempt.status === "cancelled" &&
    input.attempt.stopOrigin === "SYSTEM_GOVERNED_STOP" &&
    input.attempt.stopCode &&
    input.attempt.stopSourceRef &&
    input.attempt.cancelledAt
  ) {
    const governedBoundary = resolveGovernedBoundary({
      stopCode: input.attempt.stopCode,
      stopReason: input.attempt.stopReason,
      stopConditions: input.contract.stopConditions ?? [],
      constraints: input.contract.constraints ?? [],
    });
    if (!governedBoundary) {
      return {
        ...base,
        ...unclaimed(
          "Arrêt système sans frontière gouvernée reconstructible — STOP non claimable.",
        ),
        evidenceSummary: evidenceSummaryFor("UNCLAIMED", input.attempt.status),
      };
    }
    return {
      ...base,
      outcome: "STOP",
      businessHeadline: "Arrêt gouverné",
      businessReason: `Frontière atteinte : ${governedBoundary}. Travail antérieur préservé ; résultat métier non atteint.`,
      claimAllowed: true,
      governedBoundary,
      evidenceSummary: evidenceSummaryFor("STOP", input.attempt.status),
    };
  }

  if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
    const hasDiagnostic =
      Boolean(input.attempt.errorRef) ||
      Boolean(input.attempt.failedAt) ||
      Boolean(input.attempt.timedOutAt) ||
      Boolean(input.attempt.stopReason);
    if (!hasDiagnostic) {
      return {
        ...base,
        ...unclaimed("Échec technique sans diagnostic durable — FAIL non claimable."),
        evidenceSummary: evidenceSummaryFor("UNCLAIMED", input.attempt.status),
      };
    }
    const diagnostic =
      input.attempt.errorRef ||
      (input.attempt.status === "timeout" ? "timeout technique" : input.attempt.stopReason) ||
      "indisponibilité processus/outil";
    return {
      ...base,
      outcome: "FAIL",
      businessHeadline: "Échec technique",
      businessReason: `Échec de processus/outil : ${diagnostic}. Aucun succès métier.`,
      claimAllowed: true,
      governedBoundary: null,
      evidenceSummary: evidenceSummaryFor("FAIL", input.attempt.status),
    };
  }

  if (input.attempt.status === "cancelled") {
    return {
      ...base,
      ...unclaimed(
        "Annulation Pilote sans provenance SYSTEM_GOVERNED_STOP — STOP produit non claimable.",
      ),
      evidenceSummary: evidenceSummaryFor("UNCLAIMED", input.attempt.status),
    };
  }

  return {
    ...base,
    ...unclaimed(
      `Statut technique « ${input.attempt.status} » + évaluation Contract Result insuffisants.`,
    ),
    evidenceSummary: evidenceSummaryFor("UNCLAIMED", input.attempt.status),
  };
}
