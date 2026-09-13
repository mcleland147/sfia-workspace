/**
 * F2 — SFIA-specific execution-intent json_schema fragment (GCEC).
 * NON-AUTHORITATIVE structured intent for Nora — no REAL calls.
 * Fields align with DecisionBasis.executionBasis GCEC additives.
 */

export const F2_EXECUTION_INTENT_SCHEMA_NAME =
  "f2_execution_intent_gcec" as const;

const NULLABLE_STRING = {
  anyOf: [{ type: "string", maxLength: 2000 }, { type: "null" }],
} as const;

const STRING_ARRAY = {
  type: "array",
  items: { type: "string", maxLength: 500 },
  maxItems: 32,
} as const;

/** OpenAI-style strict json_schema fragment for structured execution intent. */
export const F2_EXECUTION_INTENT_JSON_SCHEMA: Record<string, unknown> = {
  type: "object",
  additionalProperties: false,
  properties: {
    intentKind: {
      anyOf: [
        { type: "string", enum: ["docs_write", "read_only", "other"] },
        { type: "null" },
      ],
    },
    artifactType: NULLABLE_STRING,
    targetRepositoryRef: NULLABLE_STRING,
    targetPath: NULLABLE_STRING,
    scopeIn: STRING_ARRAY,
    scopeOut: STRING_ARRAY,
    expectedOutputs: STRING_ARRAY,
    requiredCapabilities: STRING_ARRAY,
    validationExpectations: STRING_ARRAY,
    evidenceRequirements: STRING_ARRAY,
    requestedOperation: NULLABLE_STRING,
    reversibilityExpectation: {
      anyOf: [
        {
          type: "string",
          enum: ["reversible", "irreversible", "unknown"],
        },
        { type: "null" },
      ],
    },
    artifactBrief: NULLABLE_STRING,
    contentRequirements: STRING_ARRAY,
    exitRequirementKinds: STRING_ARRAY,
  },
  required: [
    "intentKind",
    "artifactType",
    "targetRepositoryRef",
    "targetPath",
    "scopeIn",
    "scopeOut",
    "expectedOutputs",
    "requiredCapabilities",
    "validationExpectations",
    "evidenceRequirements",
    "requestedOperation",
    "reversibilityExpectation",
    "artifactBrief",
    "contentRequirements",
    "exitRequirementKinds",
  ],
};

export type ExecutionIntentPayload = {
  intentKind?: string | null;
  artifactType?: string | null;
  targetRepositoryRef?: string | null;
  targetPath?: string | null;
  scopeIn?: string[];
  scopeOut?: string[];
  expectedOutputs?: string[];
  requiredCapabilities?: string[];
  validationExpectations?: string[];
  evidenceRequirements?: string[];
  requestedOperation?: string | null;
  reversibilityExpectation?: "reversible" | "irreversible" | "unknown" | null;
  artifactBrief?: string | null;
  contentRequirements?: string[];
  /** Nora-proposed exit requirement kinds (non-authoritative). */
  exitRequirementKinds?: string[];
};

function asStringArray(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const out: string[] = [];
  for (const item of value) {
    if (typeof item !== "string") return undefined;
    const t = item.trim();
    if (t) out.push(t.slice(0, 500));
  }
  return out;
}

function asNullableString(value: unknown): string | null | undefined {
  if (value === null) return null;
  if (value === undefined) return undefined;
  if (typeof value !== "string") return undefined;
  const t = value.trim();
  return t ? t.slice(0, 2000) : null;
}

/**
 * Validate / normalize Nora structured execution-intent payload.
 * Fail-closed on unknown shapes — never invent REAL launch fields.
 */
export function validateExecutionIntentPayload(
  raw: unknown,
):
  | { ok: true; payload: ExecutionIntentPayload }
  | { ok: false; reason: string } {
  if (!raw || typeof raw !== "object") {
    return { ok: false, reason: "payload_not_object" };
  }
  const r = raw as Record<string, unknown>;
  const intentKind = asNullableString(r.intentKind);
  if (intentKind === undefined && "intentKind" in r && r.intentKind !== null) {
    return { ok: false, reason: "intent_kind_invalid" };
  }
  const reversibility = r.reversibilityExpectation;
  if (
    reversibility !== undefined &&
    reversibility !== null &&
    reversibility !== "reversible" &&
    reversibility !== "irreversible" &&
    reversibility !== "unknown"
  ) {
    return { ok: false, reason: "reversibility_invalid" };
  }

  const scopeIn = asStringArray(r.scopeIn);
  if (r.scopeIn !== undefined && scopeIn === undefined) {
    return { ok: false, reason: "scope_in_invalid" };
  }
  const scopeOut = asStringArray(r.scopeOut);
  if (r.scopeOut !== undefined && scopeOut === undefined) {
    return { ok: false, reason: "scope_out_invalid" };
  }
  const expectedOutputs = asStringArray(r.expectedOutputs);
  if (r.expectedOutputs !== undefined && expectedOutputs === undefined) {
    return { ok: false, reason: "expected_outputs_invalid" };
  }
  const requiredCapabilities = asStringArray(r.requiredCapabilities);
  if (
    r.requiredCapabilities !== undefined &&
    requiredCapabilities === undefined
  ) {
    return { ok: false, reason: "required_capabilities_invalid" };
  }
  const validationExpectations = asStringArray(r.validationExpectations);
  if (
    r.validationExpectations !== undefined &&
    validationExpectations === undefined
  ) {
    return { ok: false, reason: "validation_expectations_invalid" };
  }
  const evidenceRequirements = asStringArray(r.evidenceRequirements);
  if (
    r.evidenceRequirements !== undefined &&
    evidenceRequirements === undefined
  ) {
    return { ok: false, reason: "evidence_requirements_invalid" };
  }
  const contentRequirements = asStringArray(r.contentRequirements);
  if (
    r.contentRequirements !== undefined &&
    contentRequirements === undefined
  ) {
    return { ok: false, reason: "content_requirements_invalid" };
  }
  const exitRequirementKinds = asStringArray(r.exitRequirementKinds);
  if (
    r.exitRequirementKinds !== undefined &&
    exitRequirementKinds === undefined
  ) {
    return { ok: false, reason: "exit_requirement_kinds_invalid" };
  }

  return {
    ok: true,
    payload: {
      intentKind: intentKind ?? null,
      artifactType: asNullableString(r.artifactType) ?? null,
      targetRepositoryRef: asNullableString(r.targetRepositoryRef) ?? null,
      targetPath: asNullableString(r.targetPath) ?? null,
      scopeIn: scopeIn ?? [],
      scopeOut: scopeOut ?? [],
      expectedOutputs: expectedOutputs ?? [],
      requiredCapabilities: requiredCapabilities ?? [],
      validationExpectations: validationExpectations ?? [],
      evidenceRequirements: evidenceRequirements ?? [],
      requestedOperation: asNullableString(r.requestedOperation) ?? null,
      reversibilityExpectation:
        (reversibility as ExecutionIntentPayload["reversibilityExpectation"]) ??
        null,
      artifactBrief: asNullableString(r.artifactBrief) ?? null,
      contentRequirements: contentRequirements ?? [],
      exitRequirementKinds: exitRequirementKinds ?? [],
    },
  };
}
