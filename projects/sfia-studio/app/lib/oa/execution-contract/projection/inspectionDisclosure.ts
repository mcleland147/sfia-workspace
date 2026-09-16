/**
 * Canonical Product inspection disclosure — allowlisted projection from durable
 * ExecutionContract truth. Never reconstructs paths from Proposal/client text.
 *
 * Generic `contract.target` (execution channel) and exact `inputs.targetPath`
 * (effect target) remain distinct semantics.
 */

import type { ExecutionContract } from "../domain/types";

export const DOCS_WRITE_ACTION = "cursor.docs_write.apply" as const;
export const DOCS_WRITE_TECHNICAL_TARGET = "workspace.isolated.docs_write" as const;

export type ExecutionContractInspectionDisclosure = {
  readonly action: string;
  readonly technicalTarget: string;
  readonly scope: string;
  readonly targetRepositoryRef: string | null;
  readonly targetPath: string | null;
  readonly scopeIn: readonly string[] | null;
  readonly scopeOut: readonly string[] | null;
  readonly createOrModify: boolean | null;
  readonly noDelete: boolean | null;
  readonly objective: string | null;
  readonly artifactType: string | null;
  readonly artifactBrief: string | null;
  readonly contentRequirements: readonly string[] | null;
  readonly validationExpectations: readonly string[] | null;
  readonly expectedOutputs: readonly string[] | null;
  readonly evidenceRequirements: readonly string[];
  readonly requiredAuthority: string;
  readonly requiredCapabilities: readonly string[];
  readonly constraints: readonly string[];
  readonly stopConditions: readonly string[];
  readonly reversibility: string;
  readonly contractVersion: number;
  readonly executionContractId: string;
  readonly semanticFingerprint: string | null;
  /** docs_write contracts missing mandatory effect targets are incomplete. */
  readonly disclosureComplete: boolean;
  readonly incompletenessCode: "INSPECTION_DISCLOSURE_INCOMPLETE" | null;
};

export type InspectionDisclosureProjectionResult =
  | {
      readonly ok: true;
      readonly disclosure: ExecutionContractInspectionDisclosure;
    }
  | {
      readonly ok: false;
      readonly code: "INSPECTION_DISCLOSURE_INCOMPLETE";
      readonly disclosure: ExecutionContractInspectionDisclosure;
      readonly message: string;
    };

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function asStringArray(value: unknown): readonly string[] | null {
  if (!Array.isArray(value)) return null;
  const out = value
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim())
    .filter((v) => v.length > 0);
  return out.length > 0 ? out : null;
}

function asBoolean(value: unknown): boolean | null {
  return typeof value === "boolean" ? value : null;
}

export function isDocsWriteExecutionContract(
  contract: Pick<ExecutionContract, "action" | "target">,
): boolean {
  return (
    contract.action === DOCS_WRITE_ACTION ||
    contract.target === DOCS_WRITE_TECHNICAL_TARGET
  );
}

/**
 * Allowlisted execution-significant facts for Product inspection disclosure.
 * Does not expose the raw `inputs` bag.
 */
export function projectExecutionContractInspectionDisclosure(
  contract: ExecutionContract,
): InspectionDisclosureProjectionResult {
  const inputs = contract.inputs ?? {};
  const targetPath = asNonEmptyString(inputs.targetPath);
  const targetRepositoryRef =
    asNonEmptyString(inputs.targetRepositoryRef) ??
    asNonEmptyString(inputs.repositoryRef) ??
    asNonEmptyString(inputs.repositoryIdentity);
  const scopeIn = asStringArray(inputs.scopeIn) ?? asStringArray(inputs.pathAllowlist);
  const scopeOut = asStringArray(inputs.scopeOut);
  const contentRequirements = asStringArray(inputs.contentRequirements);
  const validationExpectations = asStringArray(inputs.validationExpectations);
  const inputExpectedOutputs = asStringArray(inputs.expectedOutputs);
  const expectedOutputs =
    contract.expectedOutputs && contract.expectedOutputs.length > 0
      ? [...contract.expectedOutputs]
      : inputExpectedOutputs;
  const objective = asNonEmptyString(inputs.objective);
  const artifactType = asNonEmptyString(inputs.artifactType);
  const artifactBrief = asNonEmptyString(inputs.artifactBrief);
  const createOrModify = asBoolean(inputs.createOrModify);
  const noDelete = asBoolean(inputs.noDelete);

  const docsWrite = isDocsWriteExecutionContract(contract);
  const disclosureComplete =
    !docsWrite || (targetPath !== null && targetRepositoryRef !== null);

  const disclosure: ExecutionContractInspectionDisclosure = {
    action: contract.action,
    technicalTarget: contract.target,
    scope: contract.scope,
    targetRepositoryRef,
    targetPath,
    scopeIn,
    scopeOut,
    createOrModify,
    noDelete,
    objective,
    artifactType,
    artifactBrief,
    contentRequirements,
    validationExpectations,
    expectedOutputs,
    evidenceRequirements: [...contract.evidenceRequirements],
    requiredAuthority: contract.requiredAuthority,
    requiredCapabilities: [...contract.requiredCapabilities],
    constraints: [...contract.constraints],
    stopConditions: [...contract.stopConditions],
    reversibility: contract.reversibility,
    contractVersion: contract.version,
    executionContractId: contract.executionContractId,
    semanticFingerprint: contract.semanticFingerprint ?? null,
    disclosureComplete,
    incompletenessCode: disclosureComplete
      ? null
      : "INSPECTION_DISCLOSURE_INCOMPLETE",
  };

  if (!disclosureComplete) {
    return {
      ok: false,
      code: "INSPECTION_DISCLOSURE_INCOMPLETE",
      disclosure,
      message:
        "Disclosure d'inspection incomplète — cible exacte docs_write absente du contrat durable.",
    };
  }

  return { ok: true, disclosure };
}

/**
 * Stable fact identifiers the Pilot must have inspected for this contract.
 * Optional contract fields that are absent are not invented.
 * Mandatory docs_write effect facts fail closed when absent (empty profile
 * is never returned for incomplete docs_write — callers must refuse).
 */
export function requiredInspectedFactsForContract(
  contract: ExecutionContract,
): readonly string[] | { incomplete: true; code: "INSPECTION_DISCLOSURE_INCOMPLETE" } {
  const projected = projectExecutionContractInspectionDisclosure(contract);
  if (!projected.ok) {
    return { incomplete: true, code: "INSPECTION_DISCLOSURE_INCOMPLETE" };
  }
  const d = projected.disclosure;
  const facts: string[] = [
    "action",
    "target",
    "scope",
    "requiredAuthority",
    "requiredCapabilities",
    "constraints",
    "stopConditions",
    "reversibility",
    "evidenceRequirements",
    "semanticFingerprint",
  ];

  if (isDocsWriteExecutionContract(contract)) {
    facts.push("inputs.targetRepositoryRef");
    facts.push("inputs.targetPath");
    if (d.scopeIn) facts.push("inputs.scopeIn");
    if (d.scopeOut) facts.push("inputs.scopeOut");
    if (d.createOrModify !== null) facts.push("inputs.createOrModify");
    if (d.noDelete !== null) facts.push("inputs.noDelete");
    if (d.contentRequirements) facts.push("inputs.contentRequirements");
    if (d.validationExpectations) facts.push("inputs.validationExpectations");
  }

  if (d.expectedOutputs && d.expectedOutputs.length > 0) {
    facts.push("expectedOutputs");
  }

  return Object.freeze([...facts]);
}

export function attestationCoversRequiredFacts(input: {
  readonly inspectedFacts: readonly string[];
  readonly requiredFacts: readonly string[];
}): boolean {
  const present = new Set(input.inspectedFacts);
  return input.requiredFacts.every((fact) => present.has(fact));
}
