import { createHash, randomBytes } from "node:crypto";
import type { ClaimEvaluation } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
import { projectContractResultVerdict } from "@/lib/oa/evidence-review/application/contractResultVerdictProjection";
import { SynthesisDomainError } from "../domain/errors";
import { validateProductSynthesisShape } from "../domain/invariants";
import type {
  ProductSynthesisProjection,
  SynthesisSections,
  SynthesisSourceBindings,
  SynthesisVerdictLabel,
} from "../domain/types";

export const SYNTHESIS_GENERATED_BY =
  "deterministic_product_synthesis_builder_s04" as const;

export const ABSENT_RECOMMENDATION_TEXT =
  "Aucune recommandation Product courante n'est disponible pour cette synthèse." as const;

export type BuildProductSynthesisExecutionContractSummary = {
  readonly executionContractId: string;
  readonly action?: string;
  readonly target?: string;
  readonly scope?: string;
  /** Human-readable planned fields when present on bound semantic material. */
  readonly title?: string;
  readonly objective?: string;
  readonly description?: string;
  readonly cycleInstanceId?: string | null;
  readonly executionContractVersion?: number;
  readonly semanticFingerprint?: string;
};

export type BuildProductSynthesisAttemptSummary = {
  readonly attemptId: string;
  readonly status?: string;
  readonly resultRef?: string | null;
};

export type BuildProductSynthesisEvidenceSummary = {
  readonly evidenceId: string;
  readonly status?: string;
  readonly type?: string;
};

export type BuildProductSynthesisReviewBundleSummary = {
  readonly reviewBundleId: string;
  readonly status?: string;
  readonly completeness?: string;
  readonly frozenVersion?: number;
};

/**
 * Recommendation for Synthesis — prefer structured W3-C fields for Pilot
 * adaptation. Optional `text` is an already Pilot-adapted string (tests / callers).
 * Never invent recommendation content when absent.
 */
export type BuildProductSynthesisRecommendation = {
  readonly ref: string;
  readonly text?: string | null;
  readonly kind?: string | null;
  readonly headline?: string | null;
  readonly nextStep?: string | null;
  readonly nextActionCode?: string | null;
};

export type BuildProductSynthesisInput = {
  readonly projectId: string;
  readonly claimEvaluation: ClaimEvaluation;
  readonly executionContract?: BuildProductSynthesisExecutionContractSummary | null;
  readonly attempt?: BuildProductSynthesisAttemptSummary | null;
  readonly evidence?: readonly BuildProductSynthesisEvidenceSummary[];
  readonly reviewBundle?: BuildProductSynthesisReviewBundleSummary | null;
  readonly recommendation?: BuildProductSynthesisRecommendation | null;
  readonly title?: string;
  readonly generatedAt?: string;
  readonly synthesisId?: string;
  readonly supersedes?: string | null;
  readonly version?: number;
  readonly cycleInstanceId?: string | null;
};

function stableStringify(value: unknown): string {
  if (value === null || typeof value !== "object") {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return `[${value.map((v) => stableStringify(v)).join(",")}]`;
  }
  const obj = value as Record<string, unknown>;
  const keys = Object.keys(obj).sort();
  return `{${keys
    .map((k) => `${JSON.stringify(k)}:${stableStringify(obj[k])}`)
    .join(",")}}`;
}

/**
 * Canonical source material that affects derived sections / bindings.
 * Excludes generatedAt and random synthesisId.
 */
export function buildSynthesisSourceMaterial(input: {
  readonly projectId: string;
  readonly claimEvaluation: ClaimEvaluation;
  readonly bindings: SynthesisSourceBindings;
  readonly canonicalVerdict: ProductSynthesisProjection["canonicalVerdict"];
  readonly executionContract?: BuildProductSynthesisExecutionContractSummary | null;
  readonly attempt?: BuildProductSynthesisAttemptSummary | null;
  readonly evidence: readonly BuildProductSynthesisEvidenceSummary[];
  readonly reviewBundle?: BuildProductSynthesisReviewBundleSummary | null;
  readonly recommendationText: string;
  readonly recommendationRef: string | null;
}): Record<string, unknown> {
  const ce = input.claimEvaluation;
  const crb = ce.contractResultBindings ?? null;
  return {
    projectId: input.projectId,
    claimEvaluation: {
      claimEvaluationId: ce.claimEvaluationId,
      subjectKind: ce.subjectKind ?? null,
      status: ce.status,
      claimStatement: ce.claimStatement,
      supersedesClaimEvaluationId: ce.supersedesClaimEvaluationId ?? null,
      reviewBundleId: ce.reviewBundleId ?? null,
      reviewBundleVersion: ce.reviewBundleVersion ?? null,
      contractResultBindings: crb
        ? {
            projectId: crb.projectId,
            cycleInstanceId: crb.cycleInstanceId ?? null,
            executionContractId: crb.executionContractId,
            executionContractVersion: crb.executionContractVersion,
            executionContractSemanticFingerprint:
              crb.executionContractSemanticFingerprint,
            executionAttemptId: crb.executionAttemptId,
            reviewBundleId: crb.reviewBundleId,
            reviewBundleVersion: crb.reviewBundleVersion,
            evidenceRefs: [...crb.evidenceRefs],
          }
        : null,
    },
    bindings: input.bindings,
    canonicalVerdict: input.canonicalVerdict,
    executionContract: input.executionContract
      ? {
          executionContractId: input.executionContract.executionContractId,
          action: input.executionContract.action ?? null,
          target: input.executionContract.target ?? null,
          scope: input.executionContract.scope ?? null,
          title: input.executionContract.title ?? null,
          objective: input.executionContract.objective ?? null,
          description: input.executionContract.description ?? null,
          cycleInstanceId: input.executionContract.cycleInstanceId ?? null,
          executionContractVersion:
            input.executionContract.executionContractVersion ?? null,
          semanticFingerprint:
            input.executionContract.semanticFingerprint ?? null,
        }
      : null,
    attempt: input.attempt
      ? {
          attemptId: input.attempt.attemptId,
          status: input.attempt.status ?? null,
          resultRef: input.attempt.resultRef ?? null,
        }
      : null,
    evidence: input.evidence.map((e) => ({
      evidenceId: e.evidenceId,
      status: e.status ?? null,
      type: e.type ?? null,
    })),
    reviewBundle: input.reviewBundle
      ? {
          reviewBundleId: input.reviewBundle.reviewBundleId,
          status: input.reviewBundle.status ?? null,
          completeness: input.reviewBundle.completeness ?? null,
          frozenVersion: input.reviewBundle.frozenVersion ?? null,
        }
      : null,
    recommendationRef: input.recommendationRef,
    recommendationText: input.recommendationText,
  };
}

export function computeSynthesisSourceFingerprint(input: {
  bindings: SynthesisSourceBindings;
  canonicalVerdict: ProductSynthesisProjection["canonicalVerdict"];
  claimEvaluationStatus: ClaimEvaluation["status"];
  recommendationRef: string | null;
  /** Prefer full source material when available (CP01 semantic completeness). */
  sourceMaterial?: Record<string, unknown>;
}): string {
  const material =
    input.sourceMaterial ??
    ({
      bindings: input.bindings,
      canonicalVerdict: input.canonicalVerdict,
      claimEvaluationStatus: input.claimEvaluationStatus,
      recommendationRef: input.recommendationRef,
    } as Record<string, unknown>);
  return createHash("sha256")
    .update(stableStringify(material), "utf8")
    .digest("hex");
}

function mapVerdictLabel(
  canonical: ProductSynthesisProjection["canonicalVerdict"],
): SynthesisVerdictLabel {
  if (canonical === "PASS") return "atteint";
  if (canonical === "FAIL") return "echec";
  return "non_prouve";
}

/** Pilot subject/title from Product outcome — never raw claimStatement / EC ids. */
export function presentProductOutcomeSubject(
  canonical: ProductSynthesisProjection["canonicalVerdict"],
): string {
  if (canonical === "PASS") return "Résultat de l'action atteint";
  if (canonical === "FAIL") return "Résultat de l'action en échec";
  return "Résultat de l'action non prouvé";
}

function presentVerdictSentence(
  verdictLabel: SynthesisVerdictLabel,
): string {
  if (verdictLabel === "atteint") {
    return "Le résultat évalué pour ce travail est atteint.";
  }
  if (verdictLabel === "echec") {
    return "Le résultat évalué pour ce travail est un échec.";
  }
  return "Le résultat évalué pour ce travail n'est pas prouvé.";
}

/**
 * Pilot language for done — Attempt terminal ≠ Product proof.
 */
function presentAttemptDone(
  attempt: BuildProductSynthesisAttemptSummary | null | undefined,
  canonicalVerdict: ProductSynthesisProjection["canonicalVerdict"],
): string {
  if (!attempt) {
    return "Aucune réalisation Product n'est encore rattachée à cette synthèse.";
  }
  const status = (attempt.status ?? "").toLowerCase();
  const technicalOk = status === "succeeded" || status === "success";
  const technicalFail = status === "failed" || status === "failure";
  const cancelled = status === "cancelled" || status === "canceled";
  const stopped = status === "stopped" || status === "governed_stop";
  const timedOut = status === "timeout" || status === "timed_out";

  if (technicalOk) {
    if (canonicalVerdict === "PASS") {
      return "La réalisation prévue s'est terminée ; le résultat Product est atteint.";
    }
    if (canonicalVerdict === "FAIL") {
      return "La réalisation technique s'est terminée, mais le résultat Product est en échec.";
    }
    return "La réalisation technique s'est terminée, sans preuve Product suffisante pour conclure.";
  }
  if (technicalFail) {
    return "La réalisation prévue s'est terminée en échec technique.";
  }
  if (cancelled) {
    return "La réalisation prévue a été annulée.";
  }
  if (stopped) {
    return "La réalisation prévue a été arrêtée avant son terme.";
  }
  if (timedOut) {
    return "La réalisation prévue a dépassé le délai imparti.";
  }
  if (status) {
    return "Une réalisation Product est rattachée, sans détail d'état exploitable pour le Pilote.";
  }
  return "Une réalisation Product est rattachée, sans détail d'état supplémentaire.";
}

/**
 * Planned work — never surface raw action/target/scope machine codes
 * (cursor.docs_write.apply, workspace.isolated.*, studio.gcec.*, …).
 * Prefer human-readable title/objective/description when present.
 */
function presentPlanned(
  executionContract?: BuildProductSynthesisExecutionContractSummary | null,
): string {
  if (!executionContract) {
    return "Aucun travail prévu n'est disponible pour cette synthèse.";
  }
  const readable =
    executionContract.title?.trim() ||
    executionContract.objective?.trim() ||
    executionContract.description?.trim() ||
    "";
  if (readable.length > 0) {
    return `Travail prévu : ${readable}.`;
  }
  return "Un travail Product était prévu pour cette synthèse.";
}

function presentVerified(
  evidence: readonly BuildProductSynthesisEvidenceSummary[],
): string {
  if (evidence.length === 0) {
    return "Aucun élément de preuve détaillé n'est disponible pour cette synthèse.";
  }
  const byType = new Map<string, number>();
  let verifiedCount = 0;
  for (const e of evidence) {
    const type = e.type?.trim() || "élément";
    byType.set(type, (byType.get(type) ?? 0) + 1);
    const st = (e.status ?? "").toLowerCase();
    if (st === "verified" || st === "accepted" || st === "complete") {
      verifiedCount += 1;
    }
  }
  const typeParts = [...byType.entries()]
    .map(([type, n]) => (n === 1 ? type : `${n}× ${type}`))
    .join(", ");
  if (verifiedCount > 0) {
    return `${evidence.length} élément${evidence.length > 1 ? "s" : ""} de preuve rattaché${evidence.length > 1 ? "s" : ""} (${typeParts}), dont ${verifiedCount} vérifié${verifiedCount > 1 ? "s" : ""}.`;
  }
  return `${evidence.length} élément${evidence.length > 1 ? "s" : ""} de preuve rattaché${evidence.length > 1 ? "s" : ""} (${typeParts}).`;
}

/**
 * Map D5 NextActionCode → French Pilot next-step (mirrors classifyW3cD5NextAction
 * classes). solicit_morris_* → arbitrage/validation without naming Morris.
 */
function pilotNextStepFromActionCode(code: string | null | undefined): string | null {
  if (!code) return null;
  switch (code) {
    case "complete_evidence":
      return "Compléter les éléments de preuve pour poursuivre.";
    case "verify_evidence_integrity":
      return "Vérifier l'intégrité des éléments de preuve.";
    case "freeze_review_bundle":
      return "Finaliser le dossier d'évaluation.";
    case "complete_review":
      return "Compléter l'évaluation en cours.";
    case "evaluate_claim":
      return "Qualifier le résultat Product.";
    case "confirm_claim_evaluation":
      return "Confirmer le résultat Product évalué.";
    case "resolve_dispute":
      return "Trancher le désaccord en cours.";
    case "propose_maturity":
      return "Proposer un niveau de maturité.";
    case "confirm_maturity":
      return "Confirmer le niveau de maturité.";
    case "downgrade_maturity":
      return "Revoir le niveau de maturité à la baisse.";
    case "solicit_morris_arbitration":
      return "Un arbitrage humain est recommandé avant de poursuivre.";
    case "solicit_morris_go":
      return "Une validation pour le prochain cycle est recommandée.";
    default:
      return null;
  }
}

function pilotSentenceFromKind(kind: string | null | undefined): string | null {
  if (!kind) return null;
  switch (kind) {
    case "continue":
      return "Continuer selon la recommandation Product.";
    case "recover":
      return "Reprendre par une récupération Product.";
    case "replan":
      return "Revoir la suite du travail avant de poursuivre.";
    case "fail_closed":
      return "S'arrêter de façon prudente : aucune suite automatique.";
    default:
      return null;
  }
}

function pilotHeadlineFromStructured(input: {
  readonly kind?: string | null;
  readonly nextActionCode?: string | null;
  readonly headline?: string | null;
}): string | null {
  const code = input.nextActionCode ?? null;
  if (code === "solicit_morris_arbitration") {
    return "Arbitrage de coordination recommandé";
  }
  if (code === "solicit_morris_go") {
    return "Validation pour le prochain cycle recommandée";
  }
  if (
    code === "confirm_claim_evaluation" ||
    code === "confirm_maturity"
  ) {
    return "Confirmation humaine recommandée";
  }
  if (input.kind === "recover") {
    return "Récupération Product recommandée";
  }
  if (input.kind === "continue") {
    return "Poursuite recommandée";
  }
  if (input.kind === "fail_closed") {
    return "Arrêt prudent recommandé";
  }
  if (input.kind === "replan") {
    return "Reprise de planification recommandée";
  }
  // Only reuse a headline when it is already Pilot-safe (no OA jargon tokens).
  const raw = input.headline?.trim() ?? "";
  if (
    raw &&
    !/\b(Morris|D5|HumanDecision|ProjectTrajectory|W2|ClaimEvaluation|ReviewBundle|ContractResult|NOT_PROVEN|expectedOutputs)\b/i.test(
      raw,
    )
  ) {
    return raw;
  }
  return null;
}

/**
 * Pilot adapter — structured W3-C fields → French Pilot recommendation text.
 * Never joins raw rationale (D5 / HumanDecision / ProjectTrajectory / W2).
 */
export function projectPilotRecommendationFromW3c(input: {
  readonly kind?: string | null;
  readonly headline?: string | null;
  readonly nextStep?: string | null;
  readonly nextActionCode?: string | null;
}): string {
  const headline = pilotHeadlineFromStructured(input);
  const next =
    pilotNextStepFromActionCode(input.nextActionCode) ??
    pilotSentenceFromKind(input.kind);
  const parts: string[] = [];
  if (headline) parts.push(headline);
  if (next) parts.push(next);
  // Do not append raw nextStep machine tokens (complete_evidence, etc.).
  return parts.length > 0 ? parts.join(" ") : ABSENT_RECOMMENDATION_TEXT;
}

function resolveRecommendationText(
  recommendation: BuildProductSynthesisRecommendation | null | undefined,
): string {
  if (!recommendation) return ABSENT_RECOMMENDATION_TEXT;
  const preadapted = recommendation.text?.trim();
  if (preadapted) return preadapted;
  return projectPilotRecommendationFromW3c(recommendation);
}

function buildSections(input: {
  executionContract?: BuildProductSynthesisExecutionContractSummary | null;
  attempt?: BuildProductSynthesisAttemptSummary | null;
  evidence: readonly BuildProductSynthesisEvidenceSummary[];
  reviewBundle?: BuildProductSynthesisReviewBundleSummary | null;
  recommendationText: string;
  canonicalVerdict: ProductSynthesisProjection["canonicalVerdict"];
  verdictLabel: SynthesisVerdictLabel;
}): SynthesisSections {
  const gapsParts: string[] = [];
  if (!input.executionContract) {
    gapsParts.push("travail prévu non rattaché");
  }
  if (!input.attempt) {
    gapsParts.push("réalisation non rattachée");
  }
  if (input.evidence.length === 0) {
    gapsParts.push("aucun élément de preuve détaillé");
  }
  if (!input.reviewBundle) {
    gapsParts.push("dossier d'évaluation incomplet");
  }
  if (input.canonicalVerdict !== "PASS") {
    gapsParts.push(
      input.canonicalVerdict === "FAIL"
        ? "résultat en échec"
        : "résultat non prouvé",
    );
  }
  const gaps =
    gapsParts.length > 0
      ? `Écarts ou réserves: ${gapsParts.join("; ")}.`
      : "Aucun écart Product explicite pour cette synthèse.";

  const evaluation =
    input.canonicalVerdict === "PASS"
      ? "Le résultat a été qualifié comme atteint."
      : input.canonicalVerdict === "FAIL"
        ? "Le résultat a été qualifié comme un échec."
        : "Le résultat n'a pas pu être prouvé.";

  return {
    summary: presentVerdictSentence(input.verdictLabel),
    planned: presentPlanned(input.executionContract),
    done: presentAttemptDone(input.attempt, input.canonicalVerdict),
    evaluation,
    gaps,
    impact:
      input.canonicalVerdict === "PASS"
        ? "Impact sur le projet: le résultat atteint peut servir de base pour la suite, sans créer d'autorité supplémentaire."
        : input.canonicalVerdict === "FAIL"
          ? "Impact sur le projet: l'échec doit être traité avant de poursuivre sur la même lignée."
          : "Impact sur le projet: le résultat non prouvé laisse la continuité ou la récupération à décider hors synthèse.",
    verdict: presentVerdictSentence(input.verdictLabel),
    recommendation: input.recommendationText,
    verified: presentVerified(input.evidence),
  };
}

export function buildProductSynthesis(
  input: BuildProductSynthesisInput,
): ProductSynthesisProjection {
  if (!input.claimEvaluation) {
    throw new SynthesisDomainError(
      "SYNTHESIS_LINEAGE_REQUIRES_CLAIM_EVALUATION",
    );
  }
  if (!input.projectId || typeof input.projectId !== "string") {
    throw new SynthesisDomainError("SYNTHESIS_INVALID", "project_id_required");
  }

  const ce = input.claimEvaluation;
  const evidence = input.evidence ?? [];
  const recommendationRef = input.recommendation?.ref ?? null;
  const recommendationText = resolveRecommendationText(input.recommendation);

  const cycleInstanceId =
    input.cycleInstanceId ??
    input.executionContract?.cycleInstanceId ??
    ce.contractResultBindings?.cycleInstanceId ??
    null;

  const bindings: SynthesisSourceBindings = {
    projectId: input.projectId,
    cycleInstanceId,
    executionContractId:
      input.executionContract?.executionContractId ??
      ce.contractResultBindings?.executionContractId ??
      null,
    attemptId:
      input.attempt?.attemptId ??
      ce.contractResultBindings?.executionAttemptId ??
      null,
    evidenceIds: evidence.map((e) => e.evidenceId),
    reviewBundleId:
      input.reviewBundle?.reviewBundleId ?? ce.reviewBundleId ?? null,
    claimEvaluationId: ce.claimEvaluationId,
    recommendationRef,
  };

  const canonicalVerdict = projectContractResultVerdict(ce.status);
  const verdictLabel = mapVerdictLabel(canonicalVerdict);
  const sourceMaterial = buildSynthesisSourceMaterial({
    projectId: input.projectId,
    claimEvaluation: ce,
    bindings,
    canonicalVerdict,
    executionContract: input.executionContract,
    attempt: input.attempt,
    evidence,
    reviewBundle: input.reviewBundle,
    recommendationText,
    recommendationRef,
  });
  const sourceFingerprint = computeSynthesisSourceFingerprint({
    bindings,
    canonicalVerdict,
    claimEvaluationStatus: ce.status,
    recommendationRef,
    sourceMaterial,
  });

  const generatedAt = input.generatedAt ?? new Date().toISOString();
  // Identity is fingerprint-keyed for idempotence; IDs are unique per materialization.
  const synthesisId =
    input.synthesisId ?? `syn:${randomBytes(16).toString("hex")}`;

  const sections = buildSections({
    executionContract: input.executionContract,
    attempt: input.attempt,
    evidence,
    reviewBundle: input.reviewBundle,
    recommendationText,
    canonicalVerdict,
    verdictLabel,
  });

  const outcomeSubject = presentProductOutcomeSubject(canonicalVerdict);
  const defaultTitle = `Synthèse — ${outcomeSubject}`;

  const synthesis: ProductSynthesisProjection = {
    synthesisId,
    projectId: input.projectId,
    cycleInstanceId,
    title: input.title?.trim() || defaultTitle,
    subject: outcomeSubject,
    status: "current",
    verdictLabel,
    canonicalVerdict,
    sections,
    sourceBindings: bindings,
    sourceFingerprint,
    generatedAt,
    generatedBy: SYNTHESIS_GENERATED_BY,
    authority: "none",
    supersedes: input.supersedes ?? null,
    version: input.version ?? 1,
  };

  const violation = validateProductSynthesisShape(synthesis);
  if (violation) {
    throw new SynthesisDomainError(violation.detailCode, violation.reason);
  }
  return synthesis;
}

export function buildSynthesisSearchText(
  synthesis: ProductSynthesisProjection,
): string {
  const s = synthesis.sections;
  return [
    synthesis.title,
    synthesis.subject,
    synthesis.verdictLabel,
    s.summary,
    s.planned,
    s.done,
    s.evaluation,
    s.gaps,
    s.impact,
    s.verdict,
    s.recommendation,
    s.verified,
  ]
    .join("\n")
    .toLowerCase();
}

/**
 * Structured W3-C → Pilot recommendation text (no raw rationale).
 * Delegates to projectPilotRecommendationFromW3c.
 */
export function formatW3cRecommendationForSynthesis(input: {
  readonly kind?: string | null;
  readonly headline?: string | null;
  readonly nextStep?: string | null;
  readonly nextActionCode?: string | null;
  /** @deprecated Ignored — rationale must not reach Pilot sections. */
  readonly rationale?: string | null;
}): string {
  void input.rationale;
  return projectPilotRecommendationFromW3c({
    kind: input.kind,
    headline: input.headline,
    nextStep: input.nextStep,
    nextActionCode: input.nextActionCode,
  });
}
