/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — structured mission semantics folded
 * into ExecutionContract.inputs at prepare time.
 *
 * Pure derivation from already-derived durable ProductMissionFields.
 * Criteria kinds map onto checks the mission Result Semantic already performs
 * (no new evaluator, no new grammar). Anything not machine-checkable stays
 * `manual_review` so it can never auto-PASS.
 */

import {
  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
  DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET,
  DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION,
} from "@/lib/oa/evidence-review/application/docsWriteContractResultSemantic";
import {
  MISSION_DIAGNOSTIC_EO_TEMPLATES,
  MISSION_NEXT_STEP_EO_TEMPLATES,
  MISSION_TRACE_EO_PREFIX,
} from "@/lib/oa/evidence-review/application/missionResultPayload";
import {
  type ContractAcceptanceCriterion,
} from "@/lib/oa/execution-contract";
import type { ProductMissionFields } from "./deriveActualExecutionWorkFromProductContext";

/** Deterministic check available for the "no forbidden effect" mission rule. */
export const MISSION_VALIDATION_NO_MUTATING_EFFECT =
  "Aucun effet mutant exécuté (filesystem / git) — vérifié sur le rapport de mission" as const;

export const DOCS_WRITE_VALIDATION_PATH_ALLOWLIST =
  "Chemin cible et allowlist respectés — aucun fichier hors périmètre" as const;

export const DOCS_WRITE_VALIDATION_NO_DELETE =
  "Aucun fichier supprimé (noDelete)" as const;

export const MISSION_REPORT_REQUIREMENTS: readonly string[] = Object.freeze([
  "reportId propre au rapport",
  "executionContractId exact",
  "attemptId exact",
  "status: succeeded | failed | stopped | timeout",
  "diagnosticSummary non vide",
  "recommendedNextProductStep non vide",
  "authorizedEffectsExecuted (liste explicite, vide si aucune)",
  "Cursor Review End Of (CLAIM exécuteur) — verdict, scope, work, effects, validations, blockers, reservations, points de revue",
]);

/**
 * Generic Product mutating / reviewable missions — machine report + Review End Of.
 * Technical effects remain enforcement; this is NOT a Product task taxonomy.
 */
export const GENERIC_PRODUCT_REPORT_REQUIREMENTS: readonly string[] =
  Object.freeze([
    ...MISSION_REPORT_REQUIREMENTS,
    "fileEffects claim (created/modified/deleted) lorsque des fichiers sont touchés — CLAIM seulement",
    "validationEffects lorsque des validations sont exécutées — CLAIM seulement",
  ]);

function criterionIdFor(ordinal: number, suffix: string): string {
  return `acc:${String(ordinal).padStart(2, "0")}:${suffix}`;
}

/**
 * Map each mission expectedOutput to a structured acceptance criterion.
 * Bound 1:1 by exact EO string — never fuzzy.
 */
export function deriveMissionAcceptanceCriteria(
  mission: ProductMissionFields,
): readonly ContractAcceptanceCriterion[] {
  const criteria: ContractAcceptanceCriterion[] = [];
  mission.expectedOutputs.forEach((raw, index) => {
    const expectation = raw.trim();
    if (!expectation) return;
    const ordinal = index + 1;
    if (
      (MISSION_DIAGNOSTIC_EO_TEMPLATES as readonly string[]).includes(
        expectation,
      )
    ) {
      criteria.push({
        criterionId: criterionIdFor(ordinal, "mission-diagnostic"),
        statement: expectation,
        kind: "mission_diagnostic",
        expectedOutputRef: expectation,
        targetPath: null,
      });
      return;
    }
    if (
      (MISSION_NEXT_STEP_EO_TEMPLATES as readonly string[]).includes(
        expectation,
      )
    ) {
      criteria.push({
        criterionId: criterionIdFor(ordinal, "mission-next-step"),
        statement: expectation,
        kind: "mission_next_step",
        expectedOutputRef: expectation,
        targetPath: null,
      });
      return;
    }
    if (expectation.startsWith(MISSION_TRACE_EO_PREFIX)) {
      criteria.push({
        criterionId: criterionIdFor(ordinal, "mission-trace"),
        statement: expectation,
        kind: "mission_trace",
        expectedOutputRef: expectation,
        targetPath: null,
      });
      return;
    }
    criteria.push({
      criterionId: criterionIdFor(ordinal, "manual-review"),
      statement: expectation,
      kind: "manual_review",
      expectedOutputRef: expectation,
      targetPath: null,
    });
  });
  return Object.freeze(criteria);
}

/**
 * Docs-write expectedOutputs → same acceptanceCriteria model as generic mission.
 * No second criterion format. Legacy EO templates map to deterministic kinds.
 */
export function deriveDocsWriteAcceptanceCriteria(input: {
  readonly expectedOutputs: readonly string[];
  readonly targetPath: string | null;
}): readonly ContractAcceptanceCriterion[] {
  const target =
    typeof input.targetPath === "string" && input.targetPath.trim()
      ? input.targetPath.trim()
      : null;
  const criteria: ContractAcceptanceCriterion[] = [];
  input.expectedOutputs.forEach((raw, index) => {
    const expectation = raw.trim();
    if (!expectation) return;
    const ordinal = index + 1;
    if (expectation === BOUNDED_DOCS_WRITE_EO_TEMPLATE) {
      // Compatibility: the historical aggregate EO is too coarse for Product
      // SUCCESS by artifact existence alone. Seal as manual_review so CE stays
      // honest until named path/conformity EOs are present.
      criteria.push({
        criterionId: criterionIdFor(ordinal, "manual-review"),
        statement: expectation,
        kind: "manual_review",
        expectedOutputRef: expectation,
        targetPath: target,
      });
      return;
    }
    if (expectation === DOCS_WRITE_EO_MATERIALIZED_MARKDOWN_AT_TARGET) {
      criteria.push({
        criterionId: criterionIdFor(ordinal, "artifact-at-path"),
        statement: expectation,
        kind: "artifact_at_path",
        expectedOutputRef: expectation,
        targetPath: target,
      });
      return;
    }
    if (expectation === DOCS_WRITE_EO_MIN_CONFORMITY_VERIFICATION) {
      criteria.push({
        criterionId: criterionIdFor(ordinal, "artifact-conformity"),
        statement: expectation,
        kind: "artifact_conformity_attested",
        expectedOutputRef: expectation,
        targetPath: target,
      });
      return;
    }
    // Path-shaped / free-form EOs stay manual_review when sealed.
    // Legacy path-shaped matching remains available only when NO criterion is
    // sealed for that EO (compatibility bridge — no silent Product SUCCESS upgrade).
    criteria.push({
      criterionId: criterionIdFor(ordinal, "manual-review"),
      statement: expectation,
      kind: "manual_review",
      expectedOutputRef: expectation,
      targetPath: target,
    });
  });
  return Object.freeze(criteria);
}

/**
 * Validation plan from the mission perimeter only.
 * Non-mutating perimeters get the deterministic forbidden-effect check that
 * the mission Result Semantic already enforces.
 */
export function deriveMissionValidationPlan(
  mission: ProductMissionFields,
): readonly string[] {
  if (mission.authorizesMutatingEffects) return Object.freeze([]);
  return Object.freeze([MISSION_VALIDATION_NO_MUTATING_EFFECT]);
}

/** Thin docs_write validation obligations from the sealed envelope (not HOW). */
export function deriveDocsWriteValidationPlan(input: {
  readonly validationExpectations?: readonly string[] | null;
}): readonly string[] {
  const extras = (input.validationExpectations ?? [])
    .map((v) => (typeof v === "string" ? v.trim() : ""))
    .filter((v) => v.length > 0);
  return Object.freeze([
    DOCS_WRITE_VALIDATION_PATH_ALLOWLIST,
    DOCS_WRITE_VALIDATION_NO_DELETE,
    ...extras,
  ]);
}

export function deriveMissionReportRequirements(): readonly string[] {
  return MISSION_REPORT_REQUIREMENTS;
}

export function deriveGenericProductReportRequirements(): readonly string[] {
  return GENERIC_PRODUCT_REPORT_REQUIREMENTS;
}
