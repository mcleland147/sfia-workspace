/**
 * NATIVE-EXECUTION-LOOP-CONVERGENCE-01 — strongly-named mission semantics
 * carried in the existing ExecutionContract `inputs` bag.
 *
 * Minimal compatible extension (no schema bump): acceptance criteria,
 * validation plan and report requirements become structured, inspectable and
 * fingerprint-material instead of living only in free-form templates.
 *
 * A criterion is PASS-eligible only when its kind is deterministically
 * evaluable by an existing Result Semantic. `manual_review` / unknown kinds
 * stay NOT_PROVEN — never an LLM auto-PASS.
 */

export const CONTRACT_ACCEPTANCE_CRITERIA_INPUT_KEY =
  "acceptanceCriteria" as const;
export const CONTRACT_VALIDATION_PLAN_INPUT_KEY = "validationPlan" as const;
export const CONTRACT_REPORT_REQUIREMENTS_INPUT_KEY =
  "reportRequirements" as const;

/**
 * Deterministic kinds map 1:1 onto checks already implemented by the
 * docs-write / mission-result Contract Result semantics.
 */
export type ContractAcceptanceCriterionKind =
  /** Artifact Evidence.location must equal the bound targetPath. */
  | "artifact_at_path"
  /** Server-owned min-conformity attestation must bind the artifact. */
  | "artifact_conformity_attested"
  /** Mission payload diagnosticSummary must be non-empty. */
  | "mission_diagnostic"
  /** Mission payload recommendedNextProductStep must be non-empty. */
  | "mission_next_step"
  /** Mission payload inspectedDurableTrace must cite the Attempt. */
  | "mission_trace"
  /** Not machine-checkable — never PASS from the evaluator. */
  | "manual_review";

export type ContractAcceptanceCriterion = {
  readonly criterionId: string;
  readonly statement: string;
  readonly kind: ContractAcceptanceCriterionKind;
  /** Exact EC expectedOutputs entry this criterion grounds (when bound). */
  readonly expectedOutputRef: string | null;
  /** Repo-relative path for path-bound criteria (never absolute). */
  readonly targetPath: string | null;
};

const DETERMINISTIC_KINDS: readonly ContractAcceptanceCriterionKind[] = [
  "artifact_at_path",
  "artifact_conformity_attested",
  "mission_diagnostic",
  "mission_next_step",
  "mission_trace",
];

const ALL_KINDS: readonly ContractAcceptanceCriterionKind[] = [
  ...DETERMINISTIC_KINDS,
  "manual_review",
];

export function isContractAcceptanceCriterionKind(
  value: unknown,
): value is ContractAcceptanceCriterionKind {
  return (
    typeof value === "string" &&
    (ALL_KINDS as readonly string[]).includes(value)
  );
}

export function isDeterministicAcceptanceCriterionKind(
  kind: ContractAcceptanceCriterionKind,
): boolean {
  return (DETERMINISTIC_KINDS as readonly string[]).includes(kind);
}

function trimmedOrNull(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const t = value.trim();
  return t.length > 0 ? t : null;
}

/** Strict parse from the durable inputs bag — malformed entries are dropped. */
export function parseContractAcceptanceCriteria(
  value: unknown,
): readonly ContractAcceptanceCriterion[] {
  if (!Array.isArray(value)) return Object.freeze([]);
  const out: ContractAcceptanceCriterion[] = [];
  const seen = new Set<string>();
  for (const raw of value) {
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) continue;
    const entry = raw as Record<string, unknown>;
    const criterionId = trimmedOrNull(entry.criterionId);
    const statement = trimmedOrNull(entry.statement);
    const kind = entry.kind;
    if (!criterionId || !statement) continue;
    if (!isContractAcceptanceCriterionKind(kind)) continue;
    if (seen.has(criterionId)) continue;
    seen.add(criterionId);
    out.push(
      Object.freeze({
        criterionId,
        statement,
        kind,
        expectedOutputRef: trimmedOrNull(entry.expectedOutputRef),
        targetPath: trimmedOrNull(entry.targetPath),
      }),
    );
  }
  return Object.freeze(out);
}

/** Read a strongly-named string list input (validationPlan / reportRequirements). */
export function parseContractStringListInput(
  value: unknown,
): readonly string[] {
  if (!Array.isArray(value)) return Object.freeze([]);
  const out = value
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim())
    .filter((v) => v.length > 0);
  return Object.freeze([...new Set(out)]);
}

/**
 * Resolve structured acceptance criteria for an expectedOutputs entry.
 * Exact expectedOutputRef match only — no fuzzy / NLP matching.
 *
 * NONE ≠ AMBIGUOUS:
 * - none → no structured authority; legacy fallback may apply at the caller.
 * - unique → that criterion is the sole authority; no legacy fallback.
 * - ambiguous → fail-closed; legacy fallback forbidden.
 */
export type AcceptanceCriterionResolution =
  | { readonly kind: "none" }
  | {
      readonly kind: "unique";
      readonly criterion: ContractAcceptanceCriterion;
    }
  | {
      readonly kind: "ambiguous";
      readonly matches: readonly ContractAcceptanceCriterion[];
    };

export function resolveAcceptanceCriterionForExpectedOutput(
  criteria: readonly ContractAcceptanceCriterion[],
  expectation: string,
): AcceptanceCriterionResolution {
  const target = expectation.trim();
  if (!target) return { kind: "none" };
  const matches = criteria.filter((c) => c.expectedOutputRef === target);
  if (matches.length === 0) return { kind: "none" };
  if (matches.length === 1) {
    return { kind: "unique", criterion: matches[0]! };
  }
  return Object.freeze({
    kind: "ambiguous",
    matches: Object.freeze([...matches]),
  });
}

/**
 * Unique match only. Prefer `resolveAcceptanceCriterionForExpectedOutput`
 * when NONE must be distinguished from AMBIGUOUS (ContractResult path).
 * Returns null for both none and ambiguous — callers that need fail-closed
 * ambiguity must use resolve*.
 */
export function findAcceptanceCriterionForExpectedOutput(
  criteria: readonly ContractAcceptanceCriterion[],
  expectation: string,
): ContractAcceptanceCriterion | null {
  const resolved = resolveAcceptanceCriterionForExpectedOutput(
    criteria,
    expectation,
  );
  return resolved.kind === "unique" ? resolved.criterion : null;
}

/** Compact, bounded disclosure lines (inspection + Cursor prompt parity). */
export function describeContractAcceptanceCriteria(
  criteria: readonly ContractAcceptanceCriterion[],
): readonly string[] {
  return Object.freeze(
    criteria.map(
      (c) =>
        `${c.criterionId} [${c.kind}${
          isDeterministicAcceptanceCriterionKind(c.kind)
            ? ""
            : " — non auto-évaluable"
        }] ${c.statement}` +
        (c.expectedOutputRef ? ` → EO: ${c.expectedOutputRef}` : "") +
        (c.targetPath ? ` → path: ${c.targetPath}` : ""),
    ),
  );
}
